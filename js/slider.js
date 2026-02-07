const actorPhoto = document.querySelector('.info-section__actor-photo');
const slider = document.querySelector('.info-section__slider');
const currentIndexElement = document.querySelector('.js-current');
const totalElement = document.querySelector('.js-total');

const actorPhoto2 = document.querySelector('.info-section__actor-photo2');
const slider2 = document.querySelector('.info-section__slider2');
const currentIndexElement2 = document.querySelector('.js-current2');

let currentIndex2 = 0;
let currentIndex = 0;
const elements = document.querySelectorAll('.info-section__slider-item');
let totalLength = 2;
let isAnimating = false;

function changeSlide(direction) {
    if (window.innerWidth <= 435) {
        changeSlideAnimate(direction);
    }
    else {
        changeSlideLiner2(direction);
        changeSlideLiner(direction);
    }
}

function changeSlide2(direction) {
    changeSlideLiner2(direction);
    changeSlideLiner(direction);
}

function changeSlideAnimate(direction) {
    if (isAnimating) return; 
    isAnimating = true;

    const elementWidth = actorPhoto.getBoundingClientRect().width;

    currentIndex += direction;

    if (currentIndex < 0) {
        slider.style.transition = 'none';

        currentIndex = totalLength - 1;

        slider.style.transform = `translateX(${-elementWidth}px)`;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", "img/avatar-2.png");
        imgElement.setAttribute("alt", "");
        imgElement.setAttribute("class", "info-section__slider-item temp-element");

        slider.prepend(imgElement);
        
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease';
            slider.style.transform = `translateX(${0}px)`;
        }, 10);
        
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = `translateX(${-currentIndex * elementWidth}px)`;
            document.querySelectorAll('.temp-element').forEach(element => {
                element.remove();
            });
        }, 500);

    } else if (currentIndex >= totalLength) {
        slider.style.transition = 'transform 0.5s ease';
        currentIndex = 0; 

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", "img/avatar-1.png");
        imgElement.setAttribute("alt", "");
        imgElement.setAttribute("class", "info-section__slider-item temp-element");

        slider.appendChild(imgElement);

        slider.style.transform = `translateX(${-(totalLength) * elementWidth}px)`;
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = `translateX(${0}px)`;
            document.querySelectorAll('.temp-element').forEach(element => {
                element.remove();
            });
        }, 500);
        
    } else {
        slider.style.transition = 'transform 0.5s ease';
        const offset = -currentIndex * elementWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    setTimeout(() => {
        currentIndexElement.textContent = currentIndex + 1;
        isAnimating = false; 
    }, 500);
}

function changeSlideLiner2(direction) {
    if (!actorPhoto2 || !slider2 || !currentIndexElement2) return;
    
    const elementWidth = actorPhoto2.getBoundingClientRect().width;

    currentIndex2 += direction;

    slider2.style.transition = 'none';
    if (currentIndex2 < 0) {
        currentIndex2 = totalLength - 1; 
    } else if (currentIndex2 >= totalLength) {
        currentIndex2 = 0; 
    }

    const offset = -currentIndex2 * elementWidth; 
    slider2.style.transform = `translateX(${offset}px)`;
    currentIndexElement2.textContent = currentIndex2 + 1;
}

function changeSlideLiner(direction) {
    const elementWidth = actorPhoto.getBoundingClientRect().width;

    currentIndex += direction;

    slider.style.transition = 'none';
    if (currentIndex < 0) {
        currentIndex = totalLength - 1; 
    } else if (currentIndex >= totalLength) {
        currentIndex = 0; 
    }

    const offset = -currentIndex * elementWidth; 
    slider.style.transform = `translateX(${offset}px)`;
    currentIndexElement.textContent = currentIndex + 1;
}

function clear() {
    slider.style.transform = `translateX(${0}px)`;
    slider.style.transition = 'none';
    currentIndex = 0;
    currentIndexElement.textContent = currentIndex+1;

    if (slider2) {
        slider2.style.transform = `translateX(${0}px)`;
        slider2.style.transition = 'none';
        currentIndex2 = 0;
        if (currentIndexElement2) {
            currentIndexElement2.textContent = currentIndex2+1;
        }
    }
}

window.addEventListener('resize', () => {
    clear();
});

let startX;
let endX;

actorPhoto.addEventListener('touchstart', (event) => {
    startX = event.changedTouches[0].screenX;
});

actorPhoto.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].screenX;
    if (endX < startX) {
        changeSlide(1)
    }
    if (endX > startX) {
        changeSlide(-1)
    }
});