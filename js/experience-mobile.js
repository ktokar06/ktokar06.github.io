document.addEventListener('DOMContentLoaded', () => {
    const items = [...document.querySelectorAll('.experience-list details')];
    if (!items.length) return;
    const mobile = window.matchMedia('(max-width: 800px)');

    const labelFor = (open) => {
        const en = document.documentElement.lang === 'en';
        if (open) return en ? 'Close' : 'Скрыть';
        return en ? 'Open' : 'Раскрыть';
    };

    items.forEach((item) => {
        const summary = item.querySelector('summary');
        if (!summary || summary.querySelector('.exp-opener')) return;

        const opener = document.createElement('div');
        opener.className = 'exp-opener';
        opener.innerHTML = '<p></p><img alt="">';
        summary.append(opener);

        const render = () => {
            opener.querySelector('p').textContent = labelFor(item.open);
            opener.querySelector('img').src = item.open ? 'img/icons/arrow-up.svg' : 'img/icons/arrow-down.svg';
        };
        item.addEventListener('toggle', render);
        render();
    });

    const sync = () =>
        items.forEach((item) => {
            item.open = !mobile.matches;
        });
    mobile.addEventListener('change', sync);
    sync();

    document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
        setTimeout(
            () =>
                items.forEach((item) => {
                    const p = item.querySelector('.exp-opener p');
                    if (p) p.textContent = labelFor(item.open);
                }),
            0,
        );
    });
});
