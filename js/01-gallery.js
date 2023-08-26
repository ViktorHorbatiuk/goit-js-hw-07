import { galleryItems } from "./gallery-items.js";
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

const containerClickOn = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  const imageSource = e.target.dataset.source;

  const lightbox = basicLightbox.create(`
    <img src="${imageSource}"width="800" height="600">`);

  lightbox.show();
};

containerOfGallery.addEventListener("click", containerClickOn);
