let currentLang = 'ru';
let translations;

(async function() {
    try {
        translations = await loadTranslations();
        if (translations) {
            setLanguage();
            console.log('Translations loaded for SSL case');
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
    updateElementTextByClass('ssl-case-title', langData.sslCaseTitle);
    updateElementTextByClass('ssl-title', langData.sslTitle);
    updateElementTextByClass('ssl-secondary', langData.sslSubtitle);
    updateElementTextByClass('aboutProject-text', langData.aboutProject);
    updateElementTextByClass('ssl-about', langData.sslAbout);
    updateElementTextByClass('task-text', langData.task);
    updateElementTextByClass('ssl-task', langData.sslTask);
    updateElementTextByClass('results-text', langData.results);
    updateElementTextByClass('ssl-result1', langData.sslResult1);
    updateElementTextByClass('ssl-result3', langData.sslResult3);
    updateElementTextByClass('learned-text', langData.learned);
    updateElementTextByClass('ssl-learned', langData.sslLearned);
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