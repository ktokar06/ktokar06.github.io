let currentLang = 'ru';
let translations;

(async function() {
    try {
        translations = await loadTranslations();
        if (translations) {
            setLanguage();
            console.log('Translations loaded for API case');
        }
    } catch (error) {
        console.error('Error loading translations:', error);
    }
})();

async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const translations = await response.json();
        return translations;
    } catch (error) {
        console.error('Failed to load translations:', error);
        return null;
    }
}

const ruButton = document.querySelector('.js-ru');
let isRussian = true;

if (ruButton) {
    ruButton.addEventListener('click', () => {
        if (isRussian) {
            isRussian = false;
            ruButton.querySelector('.js-ru-text').textContent = 'RU';
            changeLanguage('en');
        }
        else {
            isRussian = true;
            ruButton.querySelector('.js-ru-text').textContent = 'EN';
            changeLanguage('ru');
        }
    });
} else {
    console.warn('Language button not found');
}

function changeLanguage(lang) {
    currentLang = lang;
    setLanguage();
}

function setLanguage() {
    if (!translations || !translations[currentLang]) {
        console.error('Translations not available');
        return;
    }
    
    const langData = translations[currentLang];
    
    updateElementText('name-text', langData.mainTitle);
    updateElementText('resume-text', langData.resume);
    updateElementTextByClass('api-case-title', langData.apiCaseTitle);
    updateElementTextByClass('api-title', langData.apiTitle);
    updateElementTextByClass('api-secondary', langData.apiSubtitle);
    updateElementTextByClass('aboutProject-text', langData.aboutProject);
    updateElementTextByClass('api-about-text', langData.apiAbout);
    updateElementTextByClass('task-text', langData.task);
    updateElementTextByClass('api-task-text', langData.apiTask);
    updateElementTextByClass('results-text', langData.results);
    updateElementTextByClass('api-result1', langData.apiResult1);
    updateElementTextByClass('api-result2', langData.apiResult2);
    updateElementTextByClass('api-result3', langData.apiResult3);
    updateElementTextByClass('learned-text', langData.learned);
    updateElementTextByClass('api-learned-text', langData.apiLearned);
    updateElementTextByClass('technologies-text', langData.technologies);
}

function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element && text) {
        element.innerHTML = text;
    }
}

function updateElementTextByClass(className, text) {
    const elements = document.querySelectorAll('.' + className);
    if (elements.length > 0 && text) {
        elements.forEach(element => {
            element.innerHTML = text;
        });
    }
}