import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(`.gallery`);

galleryItems.forEach((element) =>
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item"><a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/></a></div>`
  )
);

const instance = basicLightbox.create(`
`);

const handleImageClick = (element) => {
  if (!element.target.classList.contains("gallery__image")) {
    return;
  }
  element.preventDefault();
  instance.element().innerHTML = `<div class="modal"><img src="${element.target.dataset.source}"></img></div>`;
  instance.show();
};

gallery.addEventListener(`click`, handleImageClick);

window.addEventListener(`keydown`, (event) => {
  if (event.key !== "Escape") {
    return;
  }
  instance.close();
});
