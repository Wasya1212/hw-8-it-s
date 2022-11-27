import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const addImgToGallery = ({ preview, original, description }) => {
  galleryContainer.innerHTML += `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>
  `;
};

galleryItems.map(addImgToGallery);

new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});