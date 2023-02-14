import "simplelightbox/dist/simple-lightbox.min.css"
import SimpleLightbox from "simplelightbox"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryofImages(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryofImages(galleryItems) {
    const galleryImg = galleryItems.map(({ preview, original, description }) =>{
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
        .join("");
    return galleryImg;
};

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
