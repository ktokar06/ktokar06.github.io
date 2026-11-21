document.addEventListener('DOMContentLoaded', () => {
    const b = document.querySelector('.mobile-menu-toggle'),
        p = document.querySelector('.mobile-menu-panel');
    if (!b || !p) return;
    b.addEventListener('click', () => {
        const open = b.getAttribute('aria-expanded') === 'true';
        b.setAttribute('aria-expanded', String(!open));
        p.classList.toggle('is-open', !open);
    });
    p.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => {
            b.setAttribute('aria-expanded', 'false');
            p.classList.remove('is-open');
        }),
    );
});
