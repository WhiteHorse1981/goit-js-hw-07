import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refsGallery = document.querySelector('.gallery');

function createGallaryMarkup(items) {
  return items
    .map(
      item => `<li>
                  <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
              </li>`
    )
    .join('');
}

refsGallery.innerHTML = createGallaryMarkup(galleryItems);

refsGallery.addEventListener('click', clickImage);

function clickImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
}
