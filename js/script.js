'use strict';

const thumbnails = document.querySelectorAll('.gallery-item img');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupImg = document.querySelector('.popup__img');
const arrowLeft = document.querySelector('.popup__arrow-left');
const arrowRight = document.querySelector('.popup__arrow-right');

let currentImgIndex;

// Navbar background
document.addEventListener('DOMContentLoaded', function () {
  const navigation = document.querySelector('.navbar');

  function addShadow() {
    if (window.scrollY >= 0) {
      navigation.classList.add('shadow-bg');
    } else {
      navigation.classList.remove('shadow-bg');
    }
  }

  window.addEventListener('scroll', addShadow);
});

// Photo Gallery

const showNextImg = () => {
  if (currentImgIndex === thumbnails.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};

const showPreviousImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = thumbnails.length - 1;
  } else {
    currentImgIndex--;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};

const closePopup = () => {
  popup.classList.add('fade-out');
  setTimeout(() => {
    popup.classList.add('hidden');
    popup.classList.remove('fade-out');
  }, 300);
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', (e) => {
    popup.classList.remove('hidden');
    popupImg.src = e.target.src;
    currentImgIndex = index;
  });
});

popupClose.addEventListener('click', closePopup);

arrowRight.addEventListener('click', showNextImg);

arrowLeft.addEventListener('click', showPreviousImg);

document.addEventListener('keydown', (e) => {
  if (!popup.classList.contains('hidden')) {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      showNextImg();
    }

    if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      showPreviousImg();
    }

    if (e.key === 'Escape' || e.keyCode === 27) {
      closePopup();
    }
  }
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
