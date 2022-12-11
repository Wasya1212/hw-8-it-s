import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const generateGallery = (items, container) => {
  container.innerHTML = items.reduce((acc, { preview, original, description }) => acc += `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>
  `, '');
};

generateGallery(galleryItems, galleryContainer);

new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});