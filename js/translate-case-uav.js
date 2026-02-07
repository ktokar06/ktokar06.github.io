let currentLang = 'ru';
let translations;

(async function() {
    try {
        translations = await loadTranslations();
        if (translations) {
            setLanguage();
            console.log('Translations loaded for UAV case');
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
    updateElementTextByClass('uav-case-title', langData.uavCaseTitle);
    updateElementTextByClass('uav-title', langData.uavTitle);
    updateElementTextByClass('uav-secondary', langData.uavSubtitle);
    updateElementTextByClass('aboutProject-text', langData.aboutProject);
    updateElementTextByClass('uav-about', langData.uavAbout);
    updateElementTextByClass('task-text', langData.task);
    updateElementTextByClass('uav-task', langData.uavTask);
    updateElementTextByClass('timelineText-text', langData.timelineText || langData.timeline);

    const timelinePeriod = document.querySelector('.uav-timeline-period');
    const timelineDuration = document.querySelector('.uav-timeline-duration');
    
    if (timelinePeriod && langData.uavTimelinePeriod) {
        timelinePeriod.innerHTML = langData.uavTimelinePeriod;
    }
    
    if (timelineDuration && langData.uavTimelineDuration) {
        timelineDuration.innerHTML = langData.uavTimelineDuration;
    }
    
    updateElementTextByClass('results-text', langData.results);
    updateElementTextByClass('uav-result1', langData.uavResult1);
    updateElementTextByClass('uav-result2', langData.uavResult2);
    updateElementTextByClass('uav-result3', langData.uavResult3);
    updateElementTextByClass('uav-result4', langData.uavResult4);
    updateElementTextByClass('uav-result5', langData.uavResult5);
    updateElementTextByClass('learned-text', langData.learned);
    updateElementTextByClass('uav-learned', langData.uavLearned);
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