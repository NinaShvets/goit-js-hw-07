import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createGalleryItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `  <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}
galleryEl.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));

galleryEl.addEventListener("click", onClickCards);

function onClickCards(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
      <div class="modal">
          <img src="${evt.target.dataset.source}" alt = "${evt.target.dataset.description}" width = 1120 height = 600>
      </div>
  `,

    {
      onShow: () => {
        window.addEventListener("keydown", onEscModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscModal);
      },
    }
  );
  {
  }

  function onEscModal(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}

console.log(galleryItems);
