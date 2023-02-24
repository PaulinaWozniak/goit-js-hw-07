import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__link" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>`
}).join('');

divGallery.insertAdjacentHTML('beforeend', markup);

divGallery.addEventListener('click', urlImage);

function urlImage(e) {
    e.preventDefault();
    const url = e.target.dataset.source;
    if(!url) return;
    console.log(url);

    const instance = basicLightbox.create(`
    <img src="${url}">`);
    
    instance.show(() => console.log('lightbox now visible'))
}

