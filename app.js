const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const nabvar = document.querySelector('.main-head');

window.addEventListener('scroll', () => {
      console.log(scrollY);
      if (scrollY > 400) {
            cloud1.classList.add('moving-cloud-1')
            cloud2.classList.add('moving-cloud-2')
      }

})