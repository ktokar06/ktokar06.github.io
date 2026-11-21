document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.js-ru');
    if (!button) return;
    const label = button.querySelector('.js-ru-text');
    const ruToEn = new Map([
        ['О проекте', 'About the project'], ['Задача', 'Objective'], ['Результаты', 'Results'], ['Чему научился', 'Key learnings'], ['Технологии', 'Technologies'],
        ['Презентация проекта', 'Project presentation'], ['ВИДЕО-ПРОСМОТР', 'VIDEO PREVIEW'], ['Видео работы проекта', 'Project demo video'], ['Открыть PDF', 'Open PDF'], ['Видео и презентация', 'Video and presentation'],
        ['Антифрод-система', 'Anti-fraud system'], ['Работа над проектом', 'Project development'], ['продолжается.', 'is in progress.'], ['Репозиторий на GitHub ↗', 'GitHub repository ↗'],
        ['Статус · в разработке', 'Status · in development'], ['Нажмите на слайд, чтобы перелистнуть', 'Click the slide to continue'], ['Кирилл Токар', 'Kirill Tokar'], ['Контакты', 'Contacts'],
        ['Все проекты', 'All projects'], ['Резюме', 'Resume'], ['Открыть кейс ↗', 'Open case ↗'], ['Предыдущее фото', 'Previous photo'], ['Следующее фото', 'Next photo']
    ]);
    const original = new WeakMap();
    const nodes = [...document.querySelectorAll('main p, main h1, main h2, main h3, main span, main a, main li, header p, header a, header summary')]
        .filter(node => node.children.length === 0 && node.textContent.trim());
    nodes.forEach(node => original.set(node, node.textContent));
    let english = false;
    const render = () => {
        nodes.forEach(node => {
            const ru = original.get(node);
            node.textContent = english ? (ruToEn.get(ru.trim()) || ru) : ru;
        });
        if (label) label.textContent = english ? 'RU' : 'EN';
        document.documentElement.lang = english ? 'en' : 'ru';
    };
    button.addEventListener('click', () => { english = !english; render(); });
});
