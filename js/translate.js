var currentLang = 'ru';
let translations;

(async () => {
    translations = await loadTranslations();
})();

async function loadTranslations() {
    const response = await fetch('translations.json');
    const translations = await response.json();
    return translations;
}

const ruButton = document.querySelector('.js-ru');

let isRussian = true;

ruButton.addEventListener('click', () => {
    if (isRussian) {
        isRussian = false;
        ruButton.querySelector('.js-ru-text').textContent = 'RU';
        changeLaguage('en');
    }
    else {
        isRussian = true;
        ruButton.querySelector('.js-ru-text').textContent = 'EN';
        changeLaguage('ru');
    }
});

function changeLaguage(lang) {
    currentLang = lang;
    setLanguage();
    openInfo();
}

function setLanguage() {
    document.getElementById('title-text').innerHTML = translations[currentLang].mainTitle + '<p class="--p-secondary">' + translations[currentLang].qaEngineer + '</p>';
    document.getElementById('resume').innerHTML = translations[currentLang].resume;
    document.querySelectorAll('.about-me').forEach(item => {
        item.innerHTML = translations[currentLang].aboutme;
    });
    document.querySelectorAll('.cases').forEach(item => {
        item.innerHTML = translations[currentLang].cases;
    });
    document.querySelectorAll('.work-exp').forEach(item => {
        item.innerHTML = translations[currentLang].workExp;
    });
    document.querySelectorAll('.backg').forEach(item => {
        item.innerHTML = translations[currentLang].backgroundTitle;
    });
    document.querySelectorAll('.backgText').forEach(item => {
        item.innerHTML = translations[currentLang].backgroundText;
    });
    document.querySelectorAll('.focus').forEach(item => {
        item.innerHTML = translations[currentLang].focusTitle;
    });
    document.querySelectorAll('.focusText').forEach(item => {
        item.innerHTML = translations[currentLang].focusText;
    });
    document.querySelectorAll('.podhod').forEach(item => {
        item.innerHTML = translations[currentLang].approachTitle;
    });
    document.querySelectorAll('.podhodText').forEach(item => {
        item.innerHTML = translations[currentLang].approachText;
    });
    document.querySelectorAll('.open').forEach(item => {
        item.innerHTML = translations[currentLang].open;
    });
    document.querySelectorAll('.about-company').forEach(item => {
        item.innerHTML = translations[currentLang].aboutCompany;
    });
    document.querySelectorAll('.my-role').forEach(item => {
        item.innerHTML = translations[currentLang].myRole;
    });
    document.querySelectorAll('.post1').forEach(item => {
        item.innerHTML = translations[currentLang].gamlyPost;
    });
    document.querySelectorAll('.aeroflotPost').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotPost;
    });
    document.querySelectorAll('.post11').forEach(item => {
        item.innerHTML = translations[currentLang].freePost;
    });
    document.querySelectorAll('.sdetTitle').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotTitle;
    });
    document.querySelectorAll('.sdetTime').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotTime;
    });
    document.querySelectorAll('.exp-months').forEach(item => {
        item.innerHTML = translations[currentLang].months;
    });
    document.querySelectorAll('.sdetAbout').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotAbout;
    });
    document.querySelectorAll('.sdetRole1').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotRole1;
    });
    document.querySelectorAll('.sdetRole2').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotRole2;
    });
    document.querySelectorAll('.sdetRole3').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotRole3;
    });
    document.querySelectorAll('.sdetRole4').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotRole4;
    });
    document.querySelectorAll('.sdetRole5').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotRole5;
    });
    document.querySelectorAll('.sdetRole6').forEach(item => {
        item.innerHTML = translations[currentLang].aeroflotRole6;
    });
    document.querySelectorAll('.coursesTitle').forEach(item => {
        item.innerHTML = translations[currentLang].gamlyTitle;
    });
    document.querySelectorAll('.coursesTime').forEach(item => {
        item.innerHTML = translations[currentLang].gamlyTime;
    });
    document.querySelectorAll('.coursesAbout1').forEach(item => {
        item.innerHTML = translations[currentLang].training1;
    });
    document.querySelectorAll('.coursesAbout2').forEach(item => {
        item.innerHTML = translations[currentLang].training2;
    });
    document.querySelectorAll('.coursesAbout3').forEach(item => {
        item.innerHTML = translations[currentLang].training3;
    });
    document.querySelectorAll('.coursesAbout4').forEach(item => {
        item.innerHTML = translations[currentLang].training4;
    });
    document.querySelectorAll('.coursesAbout5').forEach(item => {
        item.innerHTML = translations[currentLang].training5;
    });
    document.querySelectorAll('.achievementsTitle').forEach(item => {
        item.innerHTML = translations[currentLang].freeTitle;
    });
    document.querySelectorAll('.freeTime1').forEach(item => {
        item.innerHTML = translations[currentLang].freeTime1;
    });
    document.querySelectorAll('.achievement1').forEach(item => {
        item.innerHTML = translations[currentLang].achievement1;
    });
    document.querySelectorAll('.achievement2').forEach(item => {
        item.innerHTML = translations[currentLang].achievement2;
    });
    document.querySelectorAll('.achievement3').forEach(item => {
        item.innerHTML = translations[currentLang].achievement3;
    });
    document.querySelectorAll('.achievement4').forEach(item => {
        item.innerHTML = translations[currentLang].achievement4;
    });
    document.querySelectorAll('.achievement5').forEach(item => {
        item.innerHTML = translations[currentLang].achievement5;
    });
    document.querySelectorAll('.achievement6').forEach(item => {
        item.innerHTML = translations[currentLang].achievement6;
    });
}