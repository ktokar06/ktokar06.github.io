document.querySelectorAll('.experience-card__oppener-info').forEach(item => {
    item.addEventListener('click', () => {
        const infoCard = item.closest('.experience-card').querySelector('.experience-card__info');
        const currentScrollY = window.scrollY;
        if (infoCard.style.display === 'flex') {
            infoCard.style.display = 'none'; 
            if (currentLang === 'ru') {
                item.querySelector('.oppener-text').textContent = 'Раскрыть'; 
            }
            else {
                item.querySelector('.oppener-text').textContent = 'Open';
            }
            item.querySelector('.oppener-img').src = 'img/icons/arrow-down.svg'; 
        } else {
            infoCard.style.display = 'flex'; 
            if (currentLang === 'ru') {
                item.querySelector('.oppener-text').textContent = 'Скрыть';
            }
            else {
                item.querySelector('.oppener-text').textContent = 'Close';
            }
            item.querySelector('.oppener-img').src = 'img/icons/arrow-up.svg'; 
            scroll(0, currentScrollY);
        }
    }); 
});

let previousWidth = window.innerWidth;

window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    const widthDelta = Math.abs(currentWidth - previousWidth);
    if (widthDelta >= 5) {
        openInfo();
        previousWidth = currentWidth;
    }
});

function openInfo() {
    document.querySelectorAll('.experience-card__oppener-info').forEach(item => {
        const infoCard = item.closest('.experience-card').querySelector('.experience-card__info'); 
        if (window.innerWidth > 435) { 
            infoCard.style.display = 'flex'; 
            if (currentLang === 'ru') {
                item.querySelector('.oppener-text').textContent = 'Скрыть';
            }
            else {
                item.querySelector('.oppener-text').textContent = 'Close';
            }
            item.querySelector('.oppener-img').src = 'img/icons/arrow-up.svg'; 
        }
        else {
            infoCard.style.display = 'none'; 
            if (currentLang === 'ru') {
                item.querySelector('.oppener-text').textContent = 'Раскрыть'; 
            }
            else {
                item.querySelector('.oppener-text').textContent = 'Open';
            }
            item.querySelector('.oppener-img').src = 'img/icons/arrow-down.svg'; 
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    openInfo();
    
    if (window.innerWidth > 435) {
        document.querySelectorAll('.experience-card__info').forEach(item => {
            item.style.display = 'flex';
        });
    }
});