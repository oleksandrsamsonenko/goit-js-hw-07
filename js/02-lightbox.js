import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = document.querySelector(`.gallery`);

galleryItems.forEach((element) => {
  galleryMarkup.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
  );
});

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});

gallery.on("show.simplelightbox", function () {});
