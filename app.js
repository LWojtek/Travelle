const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const nabvar = document.querySelector('.main-head');
const btn = document.querySelector('.book-btn');
const hero = document.querySelector('.hero');
const body = document.querySelector('body')



window.addEventListener('scroll', () => {
      console.log(scrollY);
      if (scrollY > 400) {
            cloud1.classList.add('moving-cloud-1')
            cloud2.classList.add('moving-cloud-2')
      }

})

const closeBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-bg');


window.addEventListener('DOMContentLoaded', () => {

      modal.classList.add('modal-active');

})

closeBtn.addEventListener('click', () => {
      modal.classList.remove('modal-active');

})

document.addEventListener('click', () => {
      modal.classList.remove('modal-active');
})