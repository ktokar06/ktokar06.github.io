const lang_container = document.querySelector('.change-lang-container');
const actions_container = document.querySelector('.header-main__actions');
const header_container = document.querySelector('.header-main');

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1190) {
        header_container.appendChild(lang_container);
    }
    else {
        actions_container.appendChild(lang_container);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1190) {
        header_container.appendChild(lang_container);
    }
    else {
        actions_container.appendChild(lang_container);
    }
});