document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.portrait-gallery');
    if (!gallery) return;
    const track = gallery.querySelector('.portrait-gallery__track');
    const current = gallery.querySelector('.portrait-gallery__current');
    const slides = gallery.querySelectorAll('img');
    let index = 0;

    const render = () => {
        track.style.transform = `translateX(-${index * 50}%)`;
        if (current) current.textContent = String(index + 1);
    };
    const move = (direction) => {
        index = (index + direction + slides.length) % slides.length;
        render();
    };
    gallery.querySelector('.portrait-gallery__arrow--prev').addEventListener('click', () => move(-1));
    gallery.querySelector('.portrait-gallery__arrow--next').addEventListener('click', () => move(1));

    const viewport = gallery.querySelector('.portrait-gallery__viewport');
    let startX = null;
    let dragging = false;
    viewport.addEventListener('pointerdown', (event) => {
        startX = event.clientX;
        dragging = true;
        viewport.setPointerCapture?.(event.pointerId);
    });
    viewport.addEventListener('pointerup', (event) => {
        if (!dragging || startX === null) return;
        const delta = event.clientX - startX;
        if (Math.abs(delta) > 35) move(delta < 0 ? 1 : -1);
        else move(event.clientX < viewport.getBoundingClientRect().left + viewport.clientWidth / 2 ? -1 : 1);
        startX = null;
        dragging = false;
    });
    viewport.addEventListener('pointercancel', () => {
        startX = null;
        dragging = false;
    });
});
