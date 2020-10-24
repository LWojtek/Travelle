const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');

window.addEventListener('scroll', () => {

      if (scrollY > 400) {
            cloud1.classList.add('moving-cloud-1')
            cloud2.classList.add('moving-cloud-2')
      }

})