// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
// Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. 
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
 return galleryItems.map(item => {
    return ` <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
  ` 
    }).join("");
 
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.innerHTML = galleryMarkup;


galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
   event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});




