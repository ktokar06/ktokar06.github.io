document.addEventListener('DOMContentLoaded', async () => {
    const toggle = document.querySelector('[data-language-toggle]');
    if (!toggle) return;
    const label = toggle.querySelector('.js-ru-text') || toggle;

    const caseTexts = {
        ru: {
            title: 'SWAG OWNERS',
            subtitle: 'Антифрод-система',
            aboutTitle: 'О проекте',
            about: 'SWAG OWNERS — антифрод-система, которая оценивает риск телефонных вызовов по метаданным CDR без записи, прослушивания и расшифровки разговоров.',
            taskTitle: 'Задача',
            task: 'Отделить мошенническую активность от легитимных сценариев и дать оператору объяснимое решение с контролем ложных срабатываний.',
            resultsTitle: 'Результаты',
            result1: '1. Реализован скоринг риска вызова от 0 до 100',
            result2: '2. Добавлены очередь риска, история номера и граф связей',
            result3: '3. Реализованы SHAP-факторы и фиксация решения оператора',
            learnedTitle: 'Чему научился',
            learned: 'Углубил работу с ML-пайплайном, объяснимостью прогнозов, историческими признаками и антифрод-сценариями.',
            techTitle: 'Технологии',
            scrollCue: 'Видео и презентация',
            videoTitle: 'Видео работы проекта',
            presentationTitle: 'Презентация проекта',
            openPdf: 'Открыть PDF',
            devTitle: 'Работа над проектом<br /><em>продолжается</em>',
            devText: 'Здесь появится подробный кейс после завершения разработки: описание задач, демонстрация workflow, результаты и видео работы проекта.',
            repoLink: 'Репозиторий на GitHub ↗',
            galleryCue: 'Интерфейс системы',
        },
        en: {
            title: 'SWAG OWNERS',
            subtitle: 'Anti-fraud system',
            aboutTitle: 'Project Overview',
            about: 'SWAG OWNERS is an anti-fraud system that scores the risk of phone calls using CDR metadata, without recording, listening to or transcribing conversations.',
            taskTitle: 'Objective',
            task: 'Separate fraudulent activity from legitimate scenarios and give the operator an explainable decision with control over false positives.',
            resultsTitle: 'Deliverables',
            result1: '1. Implemented call risk scoring from 0 to 100',
            result2: '2. Added a risk queue, number history and a relationship graph',
            result3: '3. Implemented SHAP factors and recording of the operator decision',
            learnedTitle: 'Key Learnings',
            learned: 'Deepened my experience with ML pipelines, prediction explainability, historical features and anti-fraud scenarios.',
            techTitle: 'Technologies & Tools',
            scrollCue: 'Video and presentation',
            videoTitle: 'Project demo video',
            presentationTitle: 'Project presentation',
            openPdf: 'Open PDF',
            devTitle: 'Work on the project<br /><em>is in progress</em>',
            devText: 'A detailed case study will appear here once development is complete: objectives, a workflow demo, results and a project video.',
            repoLink: 'GitHub repository ↗',
            galleryCue: 'System interface',
            timelineTitle: 'Timeline',
            timelinePeriod: 'September 28, 2026 — October 16, 2026',
            timelineDuration: '3 weeks',
        },
    };

    const pageTexts = {
        'case-godevflow': {
            title: 'GoDevFlow',
            subtitle: 'A platform for engineering teams',
            about: 'GoDevFlow is a Jira-style workspace for an engineering company: projects, tasks, test cases, bugs, releases, documentation, team and HR processes in a single interface.',
            task: 'Bring five scattered services into one system with access control for eight roles, where each role sees its own screen and its own team data.',
            timelinePeriod: 'October 2026 — November 2026',
            timelineDuration: '2 months',
            result1: '1. Built a Go backend and a React 19 frontend with an 8-role access model enforced on the server',
            result2: '2. Designed a 40-table PostgreSQL database filled with realistic data: 27 employees, 103 tasks',
            result3: '3. Implemented a team board, Jira-like tasks, test cases and bug reports, DB migrations and HR processes',
            result4: '4. Connected Jenkins, Kafka and n8n integrations with HMAC-signed webhooks',
            result5: '5. Wrote manual API test cases in Postman and database checks; E2E runs with zero failures',
            result6: '6. Prepared technical documentation, a database structure description and docker compose deployment',
            scrollCue: 'Presentation',
            learned: 'Went through the full fullstack cycle: from data schema design and a Go REST API to the interface, role-based access, testing and product documentation.',
        },
    };
    const pageKey = Object.keys(pageTexts).find((key) => location.pathname.includes(key));
    if (pageKey) Object.assign(caseTexts.en, pageTexts[pageKey]);

    const legacyKeys = {
        api: {
            'api-title': 'apiTitle', 'api-secondary': 'apiSubtitle', 'api-about-text': 'apiAbout', 'api-task-text': 'apiTask',
            'api-result1': 'apiResult1', 'api-result2': 'apiResult2', 'api-result3': 'apiResult3', 'api-learned-text': 'apiLearned',
        },
        ssl: {
            'ssl-title': 'sslTitle', 'ssl-secondary': 'sslSubtitle', 'ssl-about': 'sslAbout', 'ssl-task': 'sslTask',
            'ssl-result1': 'sslResult1', 'ssl-result3': 'sslResult3', 'ssl-learned': 'sslLearned',
        },
        uav: {
            'uav-title': 'uavTitle', 'uav-secondary': 'uavSubtitle', 'uav-about': 'uavAbout', 'uav-task': 'uavTask',
            'uav-timeline-period': 'uavTimelinePeriod', 'uav-timeline-duration': 'uavTimelineDuration',
            'uav-result1': 'uavResult1', 'uav-result2': 'uavResult2', 'uav-result3': 'uavResult3',
            'uav-result4': 'uavResult4', 'uav-result5': 'uavResult5', 'uav-learned': 'uavLearned',
        },
        common: {
            'aboutProject-text': 'aboutProject', 'task-text': 'task', 'results-text': 'results',
            'learned-text': 'learned', 'technologies-text': 'technologies', 'timelineText-text': 'timelineText',
        },
    };

    let legacy = null;
    try {
        const response = await fetch('translations.json');
        if (response.ok) legacy = await response.json();
    } catch {
        legacy = null;
    }

    const original = new Map();
    const remember = (element) => {
        if (!original.has(element)) original.set(element, element.innerHTML);
    };
    const put = (element, value, html = false) => {
        if (!element || value === undefined) return;
        remember(element);
        if (html) element.innerHTML = value;
        else element.textContent = value;
    };

    const page = location.pathname.split('/').pop();
    const legacySet = page.includes('case-api') ? 'api' : page.includes('case-ssl') ? 'ssl' : page.includes('case-uav') ? 'uav' : null;

    let lang = 'ru';
    const render = () => {
        if (lang === 'ru') {
            original.forEach((html, element) => { element.innerHTML = html; });
        } else {
            const header = { name: 'Kirill Tokar' };
            put(document.querySelector('#name-text'), header.name);

            if (legacySet && legacy && legacy.en) {
                const en = legacy.en;
                Object.entries({ ...legacyKeys.common, ...legacyKeys[legacySet] }).forEach(([cls, key]) => {
                    document.querySelectorAll('.' + cls).forEach((element) => put(element, en[key]));
                });
            }

            document.querySelectorAll('[data-i18n]').forEach((element) => put(element, caseTexts.en[element.dataset.i18n]));
            document.querySelectorAll('[data-i18n-html]').forEach((element) => put(element, caseTexts.en[element.dataset.i18nHtml], true));
            const cue = document.querySelector('.case-scroll-cue__text:not([data-i18n])');
            if (cue) put(cue, caseTexts.en.galleryCue);
        }
        document.documentElement.lang = lang;
        label.textContent = lang === 'ru' ? 'EN' : 'RU';
    };

    toggle.addEventListener('click', () => {
        lang = lang === 'ru' ? 'en' : 'ru';
        render();
    });
});
