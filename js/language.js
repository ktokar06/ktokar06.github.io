document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('[data-language-toggle]');
    if (!toggle) return;
    const label = toggle.querySelector('.js-ru-text') || toggle;
    let lang = 'ru';
    const data = {
        ru: {
            hero: ['Тестирую продукты|и пишу <em>автотесты</em>', 'Ищу слабые места в продукте раньше пользователей: проектирую проверки, автоматизирую рутину и помогаю команде выпускать стабильные релизы.', 'Смотреть проекты', 'Узнать обо мне'],
            about: ['Обо мне', 'Я инженер по качеству, который соединяет ручное тестирование, автоматизацию и понимание продукта.', 'Начал путь с олимпиады по автоматизации тестирования на Java и продолжаю развиваться на стыке QA и разработки. Мне важно находить не только дефекты, но и причины, которые к ним приводят.'],
            projects: ['Проекты', ['REST API testing', 'SSL Certificate Bot', 'UAV Tournament', 'SWAG OWNERS', 'GoDevFlow'], ['CRUD-сценарии, тест-кейсы и проверки валидации данных.', 'Мониторинг сертификатов и автоматические уведомления в Telegram.', 'Система управления турнирами и хранения результатов.', 'Объяснимый скоринг риска телефонных вызовов по метаданным.', 'Платформа для полного цикла разработки: задачи, тесты, баги и релизы.']],
            experience: ['Опыт', 'Практика, системное обучение и соревнования, которые сформировали мой подход к качеству.', ['SDET-инженер · SimbirSoft', 'Обучение и курсы', 'Олимпиады и достижения'], ['Стажировка по автоматизации тестирования веб-приложений.', 'Комплексное обучение ручному тестированию, Java, Git, Docker и CI/CD.', 'Олимпиады, конференции и хакатоны в 2024–2026 годах.']],
            experienceDetails: [['Разрабатывал и поддерживал автотесты на Java, Selenium и TestNG.', 'Создавал тестовый фреймворк с паттернами POM, Factory и Fluent.', 'Тестировал REST API: GET, POST, PUT, DELETE.', 'Проверял целостность данных через JDBC и настраивал Selenium Grid.', 'Формировал отчёты Allure и использовал DataProvider.'], ['Комплексное ручное тестирование — VK Testers.', 'Автоматизация тестирования на Java — Udemy.', 'Основы тестирования ПО — Udemy.', 'Инструменты разработчика: Git, Docker, CI/CD — VK Курсы.', 'Инженер по тестированию — Нетология.'], ['1 место — олимпиада «Автоматизация тестирования на Java», ВолгаИТ, 2025.', '2 место — олимпиада «Автоматизация тестирования на Java», ВолгаИТ, 2024.', '1 место — олимпиада СПбГУ «Киберзащитник», 2025.', 'Диплом 2 степени — конференция «Студенческая наука», 2024.', 'Диплом 3 степени — конференция «Путь к успеху», КТ МТУСИ, 2025.', '2 место — научная конференция «Инновации в IT», 2026.', 'Диплом 3 степени — хакатон «Разум 2.0», 2026.']],
            dates: ['2025 · 6 месяцев', '2024 — сейчас', '2024 — 2026'],
            nav: ['Обо мне', 'Проекты', 'Опыт'], menu: ['Обо мне', 'Проекты', 'Опыт', 'Резюме ↗'], resume: 'Резюме'
        },
        en: {
            hero: ['I test products|and write <em>automated tests</em>', 'I find weak spots in a product before users do: I design checks, automate routine work and help the team ship stable releases.', 'View projects', 'About me'],
            about: ['About', 'I am a quality engineer combining manual testing, automation and product thinking.', 'My journey began with a Java test automation olympiad. I keep growing at the intersection of QA and development, looking not only for defects but for the causes behind them.'],
            projects: ['Projects', ['REST API testing', 'SSL Certificate Bot', 'UAV Tournament', 'SWAG OWNERS', 'GoDevFlow'], ['CRUD scenarios, test cases and data validation checks.', 'Certificate monitoring with automated Telegram notifications.', 'A tournament management and results archive system.', 'Explainable phone-call risk scoring based on metadata.', 'A platform for the full development cycle: tasks, tests, bugs and releases.']],
            experience: ['Experience', 'Hands-on work, continuous learning and competitions shaped my approach to quality.', ['SDET Engineer · SimbirSoft', 'Education and courses', 'Olympiads and competitions'], ['Web application test automation internship.', 'Continuous learning in manual testing, Java, Git, Docker and CI/CD.', 'Olympiads, conferences and hackathons from 2024 to 2026.']],
            experienceDetails: [['Developed and maintained automated tests with Java, Selenium and TestNG.', 'Created a test framework using POM, Factory and Fluent patterns.', 'Tested REST API requests: GET, POST, PUT and DELETE.', 'Validated data integrity with JDBC and configured Selenium Grid.', 'Generated Allure reports and used DataProvider.'], ['Comprehensive Manual Testing — VK Testers.', 'Java Test Automation — Udemy.', 'Software Testing Fundamentals — Udemy.', 'Developer Tools: Git, Docker, CI/CD — VK Courses.', 'QA Engineer — Netology.'], ['1st place — Java Test Automation Olympiad, VolgaIT, 2025.', '2nd place — Java Test Automation Olympiad, VolgaIT, 2024.', '1st place — SPbGU Cybersecurity Olympiad, 2025.', '2nd degree diploma — Student Science Conference, 2024.', '3rd degree diploma — Path to Success Conference, CT MTUCI, 2025.', '2nd place — IT Innovations Conference, 2026.', '3rd degree diploma — Razum 2.0 Hackathon, 2026.']],
            dates: ['2025 · 6 months', '2024 — present', '2024 — 2026'],
            nav: ['About', 'Projects', 'Experience'], menu: ['About', 'Projects', 'Experience', 'Resume ↗'], resume: 'Resume'
        }
    };
    const text = value => value.replaceAll('|', '<br>');
    const set = (selector, value, html = false) => { const el = document.querySelector(selector); if (el) html ? (el.innerHTML = text(value)) : (el.textContent = value); };
    const render = () => {
        const t = data[lang];
        document.documentElement.lang = lang;
        set('.function-hero h1', t.hero[0], true); set('.hero-copy', t.hero[1]);
        document.querySelectorAll('.hero-text-link').forEach((el, i) => { if (t.hero[i + 2]) el.textContent = t.hero[i + 2] + ' ↘'; });
        set('.about-section h2', t.about[0], true); document.querySelectorAll('.about-copy p').forEach((el, i) => { if (t.about[i + 1]) el.textContent = t.about[i + 1]; });
        set('.projects-section h2', t.projects[0], true); const order = ['case-api.html', 'case-ssl.html', 'case-uav.html', 'case-antifraud.html', 'case-godevflow.html']; document.querySelectorAll('.project-card').forEach(card => { const i = order.indexOf(card.getAttribute('href')); if (i < 0) return; const h = card.querySelector('h3'), p = card.querySelector('.project-meta p'); if (h) h.textContent = t.projects[1][i]; if (p) p.textContent = t.projects[2][i]; }); document.querySelectorAll('.project-meta small').forEach(el => { el.textContent = el.textContent.replace(lang === 'ru' ? 'In development' : 'В разработке', lang === 'ru' ? 'В разработке' : 'In development'); }); document.querySelectorAll('.project-link').forEach(el => el.textContent = lang === 'ru' ? 'Открыть кейс ↗' : 'Open case ↗');
        set('.experience-section h2', t.experience[0], true);
        set('.experience-section .section-description', t.experience[1]);
        document.querySelectorAll('.experience-list summary span').forEach((el, i) => { el.textContent = t.experience[2][i]; });
        document.querySelectorAll('.experience-list summary small').forEach((el, i) => { if (t.dates && t.dates[i]) el.textContent = t.dates[i]; });
        document.querySelectorAll('.experience-list details').forEach((detail, i) => {
            const lead = detail.querySelector('.experience-lead');
            if (lead && t.experience[3][i]) lead.textContent = t.experience[3][i];
            detail.querySelectorAll('li').forEach((el, j) => { if (t.experienceDetails[i]?.[j]) el.textContent = t.experienceDetails[i][j]; });
            const opener = detail.querySelector('.exp-opener p');
            if (opener) opener.textContent = detail.open ? (lang === 'ru' ? 'Скрыть' : 'Close') : (lang === 'ru' ? 'Раскрыть' : 'Open');
        });
        const sticky = document.querySelector('.experience-sticky-title');
        if (sticky) sticky.textContent = lang === 'ru' ? 'Опыт работы' : 'Work experience';
        const title = document.querySelector('#title-text');
        if (title) title.innerHTML = (lang === 'ru' ? 'Кирилл Токар' : 'Kirill Tokar') + '<p class="--p-secondary">QA Engineer</p>';
        const resume = document.querySelector('.header-main__actions .button p');
        if (resume) resume.textContent = lang === 'ru' ? 'Резюме' : 'Resume';
        const menuLabels = { '#about': t.menu[0], '#projects': t.menu[1], '#experience': t.menu[2], 'assets/resume.pdf': t.menu[3] };
        document.querySelectorAll('.mobile-menu-panel a').forEach((el) => {
            const value = menuLabels[el.getAttribute('href')];
            if (value) el.textContent = value;
        });
        label.textContent = lang === 'ru' ? 'EN' : 'RU';
    };
    toggle.addEventListener('click', () => { lang = lang === 'ru' ? 'en' : 'ru'; render(); });
    render();
});
