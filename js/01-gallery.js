// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе < img >,
// и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.
/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь 
// будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape.
// Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. 
// У библиотеки basicLightbox есть метод для программного закрытия модального окна.


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const gallery = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
 return galleryItems.map(item => {
    return ` <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</div>
  `
    }).join("");
 
}

const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;


//  2.Реализация делегирования на div.gallery и получение url большого изображения.

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
   event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }
  const originalImageUrl = event.target.dataset.source;
  onBasicLightbox(originalImageUrl);
}

// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
//  4.Открытие модального окна по клику на элементе галереи. 
// Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

let instance = {};

function onBasicLightbox(imgUrl) {
  instance = basicLightbox.create(`<img src="${imgUrl}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    instance.close();
  }
}