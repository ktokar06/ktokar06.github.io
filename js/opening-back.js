const backLink = document.querySelector('.back-link');
const animatedWindow = document.querySelector('.enter-animated');

if (backLink && animatedWindow) {
    backLink.addEventListener('click', () => {
        darkening();
        setTimeout(() => {
            window.location.href = '/';
        }, 500);
    });
}

window.addEventListener("pageshow", function(event) {
    if (event.persisted && animatedWindow) {
        animatedWindow.style.backgroundColor = 'transparent';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (animatedWindow) {
        animatedWindow.style.backgroundColor = 'transparent';
    }
});

function darkening() {
    if (animatedWindow) {
        animatedWindow.style.backgroundColor = '#000';
    }
}