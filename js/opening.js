const apiProject = document.querySelectorAll('.--api-testing');
const sslProject = document.querySelectorAll('.--ssl-project');
const uavProject = document.querySelectorAll('.--uav-project');

const animatedWindow = document.querySelector('.enter-animated');

apiProject.forEach(item => {
    item.addEventListener('click', () => {
        darkening();
        setTimeout(() => {
            window.location.href = 'case-api.html';
        }, 500);
    });
});

sslProject.forEach(item => {
    item.addEventListener('click', () => {
        darkening();
        setTimeout(() => {
            window.location.href = 'case-ssl.html';
        }, 500);
    });
});

uavProject.forEach(item => {
    item.addEventListener('click', () => {
        darkening();
        setTimeout(() => {
            window.location.href = 'case-uav.html';
        }, 500);
    });
});

window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        animatedWindow.style.backgroundColor = 'transparent';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    animatedWindow.style.backgroundColor = 'transparent';
});

function darkening() {
    animatedWindow.style.backgroundColor = '#000';
}