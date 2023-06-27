import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createGalleryItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));

const galleryLinks = document.querySelectorAll(".gallery__link");
const galleryLightbox = new SimpleLightbox(galleryLinks, {
  captionsData: "alt",

  captionDelay: 250,
});
console.log(galleryLightbox);
console.log(galleryItems);
