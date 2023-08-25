import { galleryItems } from './gallery-items.js';
// Change code below this line


const containerOfGallery = document.querySelector(".gallery");
const markupOfGallery = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
        </li>`;
  })
  .join("");

containerOfGallery.insertAdjacentHTML("beforeend", markupOfGallery);

containerOfGallery.addEventListener("click", (e) => {
  e.preventDefault();

  const imageSource = e.target.dataset.source;
  basicLightbox
    .create(`<img src="${imageSource}" width="800" height="600">`)
    .show();
});
