import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(`.gallery`);

galleryItems.forEach((element) =>
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item"><a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/></a></div>`
  )
);

const handleImageClick = (element) => {
  if (!element.target.classList.contains("gallery__image")) {
    return;
  }
  element.preventDefault();

  const instance = basicLightbox.create(
    `<div class="modal"><img src="${element.target.dataset.source}"></img></div>`,
    {
      onShow: () => {
        window.addEventListener(`keydown`, handleClick);
      },
      onClose: () => window.removeEventListener(`keydown`, handleClick),
    }
  );
  const handleClick = function (event) {
    if (event.key !== "Escape") {
      return;
    }
    console.log(event.key);
    instance.close();
  };
  instance.show();
};

gallery.addEventListener(`click`, handleImageClick);
