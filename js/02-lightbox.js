import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');


const markup = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>`
}). join('');

ulGallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});