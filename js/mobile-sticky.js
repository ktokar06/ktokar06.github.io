window.addEventListener('scroll', function() {
    const stickyElement1 = document.querySelector('.title-exp');
    const section1 = document.querySelector('.section-exp');
    const sectionRect1 = section1.getBoundingClientRect();

    const stickyElement2 = document.querySelector('.title-case');
    const section2 = document.querySelector('.section-case');
    const sectionRect2 = section2.getBoundingClientRect();

    const stickyElement3 = document.querySelector('.title-about');
    const section3 = document.querySelector('.section-about');
    const sectionRect3 = section3.getBoundingClientRect();
    
    if (window.innerWidth > 1190) {
        stickyElement1.style.position = 'absolute';
        stickyElement2.style.position = 'absolute';
        stickyElement3.style.position = 'absolute';
    }
    else {
        document.querySelectorAll('.info-section').forEach(item => {
            item.style.transform = 'none';
        });
        if (sectionRect1.top <= 0 && sectionRect1.bottom >= stickyElement1.offsetHeight) {
            stickyElement1.style.position = 'fixed';
        } else {
            stickyElement1.style.position = 'absolute';
        }
    
        if (sectionRect2.top <= 0 && sectionRect2.bottom >= stickyElement2.offsetHeight) {
            stickyElement2.style.position = 'fixed';
        } else {
            stickyElement2.style.position = 'absolute';
        }
    
        if (sectionRect3.top <= 0 && sectionRect3.bottom >= stickyElement3.offsetHeight) {
            stickyElement3.style.position = 'fixed';
        } else {
            stickyElement3.style.position = 'absolute';
        }
    }
});