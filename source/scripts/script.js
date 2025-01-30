import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiperTeam = new Swiper('.team-swiper', {
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
})

const swiperBrands = new Swiper('.brands-swiper', {
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
})

const swiperReviews = new Swiper('.reviews-swiper', {
  modules: [Navigation, Pagination],
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 352,
  navigation: {
    nextEl: '.reviews-swiper__button--next',
    prevEl: '.reviews-swiper__button--prev',
  },
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  initialSlide: 1
})

function checkPhone(e) {
  let input = e.target;
  let inputValue = input.value;
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let form = input.closest('form');
  let submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  if (regex.test(inputValue)) {
    input.classList.add('correct');
    input.classList.remove('incorrect');
    submitBtn.disabled = false;
  } else if (inputValue == 0) {
    input.classList.remove('incorrect');
    submitBtn.disabled = false;
    input.classList.remove('correct');
  } else {
    input.classList.add('incorrect');
    input.classList.remove('correct');
    submitBtn.disabled = true;
  }
}

function checkMail(e) {
  const input = e.target;
  let form = input.closest('form');
  let submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(input.value)) {
    input.classList.add('correct');
    input.classList.remove('incorrect');
    submitBtn.disabled = false;
  } else {
    input.classList.add('incorrect');
    input.classList.remove('correct');
    submitBtn.disabled = true;
  }
}

document.getElementById('hero-input').addEventListener('input', checkPhone);
document.getElementById('subscribe-input').addEventListener('input', checkMail);
document.getElementById('contacts-input').addEventListener('input', checkPhone);
document.getElementById('modal-input-phone').addEventListener('input', checkPhone);
document.getElementById('modal-input-email').addEventListener('input', checkMail);

const modalButtons = document.querySelectorAll('.order-button--modal');
const modalContainer = document.querySelector('.modal-container');
modalButtons.forEach((element) => {
  element.addEventListener('click', () => {
    modalContainer.classList.add('modal-container--visible')
  })
})
const modalCloseButton = document.querySelector('.modal__close-button');
modalCloseButton.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container--visible')
})
