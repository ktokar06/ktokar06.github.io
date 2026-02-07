const bluredHeader = document.querySelector('.content-header');
const y = window.innerHeight * 0.55 + 24;

var progressBar = document.querySelector('.content-header__progress');

window.addEventListener('scroll', () => {
    if (window.scrollY + 1 >= y) {
        bluredHeader.classList.add('fixed');
        progressBar.style.display = 'block';

    } else {
        bluredHeader.classList.remove('fixed');
        progressBar.style.display = 'none';
    }
});

window.addEventListener('touchmove', () => {
    if (window.scrollY + 1 >= y) {
        bluredHeader.classList.add('fixed');
        progressBar.style.display = 'block';

    } else {
        bluredHeader.classList.remove('fixed');
        progressBar.style.display = 'none';
    }
});