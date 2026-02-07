const firstBox = document.querySelector('.first-box');
const secondBox = document.querySelector('.second-box');
const changebleBox = document.querySelector('.info-box--6');
const changebleBox2 = document.querySelector('.info-box--3');

window.addEventListener('resize', adaptive);

function adaptive() {
    if (window.innerWidth <= 1024) {
        firstBox.appendChild(changebleBox);
        if (window.innerWidth <= 420) {
            secondBox.appendChild(changebleBox2);
            secondBox.appendChild(changebleBox);
        }
        else {
            firstBox.appendChild(changebleBox);
            firstBox.appendChild(changebleBox2);
        }
    }
    else {
        secondBox.appendChild(changebleBox);
        firstBox.appendChild(changebleBox2);
    }
}

document.addEventListener("DOMContentLoaded", adaptive);

const contactsContainer = document.querySelector('.contacts-container');
const plusMinusIcon = document.querySelector('.plus-minus-icon');

contactsContainer.addEventListener('mouseenter', () => {
  plusMinusIcon.classList.add('active');
});

contactsContainer.addEventListener('mouseleave', () => {
  plusMinusIcon.classList.remove('active');
});