`use strict`;


const closeBtn = document.querySelector(`.close-btn`);
const openBtn = document.querySelector(`.hamburger-btn`);
const navigationUl = document.querySelector(`.navigation--ul`);




openBtn.addEventListener(`click`, () => {
    navigationUl.style.transform = `translateX(0)`;
    openBtn.classList.toggle(`display-none`);
    closeBtn.classList.toggle(`display-none`);
})




closeBtn.addEventListener(`click`, () => {
    navigationUl.style.transform = `translateX(100%)`;
    openBtn.classList.toggle(`display-none`);
    closeBtn.classList.toggle(`display-none`);
})