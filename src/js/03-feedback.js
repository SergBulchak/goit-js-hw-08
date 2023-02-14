import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMsg = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const feedbackData = {};

setFeedbackData();

form.addEventListener(
  'input',
  throttle(e => {
    feedbackData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackData));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  clearLocalStorage();
});

function setFeedbackData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    userEmail.value = savedData.email || '';
    userMsg.value = savedData.message || '';
  }
};

function clearLocalStorage() {
  localStorage.clear();
}