document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.presentation-viewer').forEach((viewer) => {
        const track = viewer.querySelector('.presentation-track');
        const slides = [...viewer.querySelectorAll('.presentation-track img')];
        const current = viewer.querySelector('.presentation-current');
        const total = slides.length;
        if (!track || !total) return;
        let index = 0;
        let busy = false;

        viewer.classList.add('is-fade');
        slides.forEach((slide, i) => {
            slide.loading = i < 2 ? 'eager' : 'lazy';
            slide.classList.toggle('is-active', i === 0);
        });

        const preload = (i) => {
            const slide = slides[(i + total) % total];
            if (slide && slide.loading === 'lazy') slide.loading = 'eager';
        };

        const show = (next) => {
            if (busy || next === index) return;
            busy = true;
            slides[index].classList.remove('is-active');
            index = (next + total) % total;
            slides[index].classList.add('is-active');
            if (current) current.textContent = index + 1;
            preload(index + 1);
            preload(index - 1);
            setTimeout(() => {
                busy = false;
            }, 280);
        };
        const move = (step) => show(index + step);

        viewer.querySelector('.presentation-arrow--prev')?.addEventListener('click', () => move(-1));
        viewer.querySelector('.presentation-arrow--next')?.addEventListener('click', () => move(1));
        viewer.querySelector('.presentation-screen')?.addEventListener('click', (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            move(event.clientX - rect.left < rect.width / 3 ? -1 : 1);
        });

        const visible = () => {
            const r = viewer.getBoundingClientRect();
            return r.top < innerHeight * 0.75 && r.bottom > innerHeight * 0.25;
        };
        document.addEventListener('keydown', (event) => {
            if (!visible() || event.target.closest('input, textarea, video')) return;
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                move(1);
            }
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                move(-1);
            }
        });

        let startX = null;
        viewer.addEventListener(
            'touchstart',
            (event) => {
                startX = event.touches[0].clientX;
            },
            { passive: true },
        );
        viewer.addEventListener('touchend', (event) => {
            if (startX === null) return;
            const delta = event.changedTouches[0].clientX - startX;
            if (Math.abs(delta) > 40) move(delta < 0 ? 1 : -1);
            startX = null;
        });

        preload(1);
        preload(total - 1);
    });
});
