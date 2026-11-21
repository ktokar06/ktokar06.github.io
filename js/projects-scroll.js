document.addEventListener('DOMContentLoaded', () => {
    const rail = document.querySelector('.project-rail');
    if (!rail) return;

    // The vertical wheel is never intercepted: the page always scrolls normally.
    // The rail moves only by horizontal trackpad/shift+wheel, touch swipe, mouse drag or the arrow buttons.
    const prev = document.querySelector('.projects-nav__btn--prev');
    const next = document.querySelector('.projects-nav__btn--next');
    const smooth = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

    const maxScroll = () => rail.scrollWidth - rail.clientWidth;

    const updateButtons = () => {
        if (!prev || !next) return;
        prev.disabled = rail.scrollLeft <= 2;
        next.disabled = rail.scrollLeft >= maxScroll() - 2;
    };

    // Own animation: native smooth scroll + CSS snapping can stop halfway.
    let frame = null;
    let pending = 0;
    const animateTo = (target) => {
        cancelAnimationFrame(frame);
        const from = rail.scrollLeft;
        const distance = target - from;
        if (smooth === 'auto' || Math.abs(distance) < 1) {
            rail.scrollLeft = target;
            return;
        }
        const duration = Math.min(700, 300 + Math.abs(distance) * 0.4);
        const start = performance.now();
        rail.classList.add('is-animating');
        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            rail.scrollLeft = from + distance * eased;
            if (t < 1) frame = requestAnimationFrame(tick);
            else {
                frame = null;
                rail.classList.remove('is-animating');
                updateButtons();
            }
        };
        frame = requestAnimationFrame(tick);
    };

    // Snap to exact card edges so the buttons never fight CSS scroll-snap.
    const positions = () => {
        const max = maxScroll();
        const base = rail.getBoundingClientRect().left - rail.scrollLeft;
        const list = [...rail.children].map((card) => Math.min(max, Math.round(card.getBoundingClientRect().left - base)));
        return [...new Set(list)];
    };
    const go = (direction) => {
        const current = frame ? pending : rail.scrollLeft;
        const list = positions();
        const target =
            direction > 0
                ? list.find((x) => x > current + 4) ?? list[list.length - 1]
                : [...list].reverse().find((x) => x < current - 4) ?? 0;
        pending = target;
        animateTo(target);
    };
    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));

    let ticking = false;
    rail.addEventListener(
        'scroll',
        () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateButtons();
                ticking = false;
            });
        },
        { passive: true },
    );
    window.addEventListener('resize', updateButtons, { passive: true });

    // Mouse drag (desktop). Touch uses native scrolling.
    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    let moved = false;

    rail.addEventListener('pointerdown', (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        dragging = true;
        moved = false;
        startX = event.clientX;
        startScroll = rail.scrollLeft;
    });
    window.addEventListener('pointermove', (event) => {
        if (!dragging) return;
        const delta = event.clientX - startX;
        if (!moved && Math.abs(delta) < 6) return;
        if (!moved) {
            moved = true;
            rail.classList.add('is-dragging');
        }
        rail.scrollLeft = startScroll - delta;
    });
    const stopDrag = () => {
        if (!dragging) return;
        dragging = false;
        rail.classList.remove('is-dragging');
    };
    window.addEventListener('pointerup', stopDrag);
    window.addEventListener('pointercancel', stopDrag);

    // A drag must not open the case under the cursor.
    rail.addEventListener(
        'click',
        (event) => {
            if (moved) {
                event.preventDefault();
                moved = false;
            }
        },
        true,
    );
    rail.addEventListener('dragstart', (event) => event.preventDefault());

    updateButtons();
});
