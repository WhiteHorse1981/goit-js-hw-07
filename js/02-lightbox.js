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
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

gallery.on('show.simplelightbox', function (evt) {
  evt.preventDefault();
});
