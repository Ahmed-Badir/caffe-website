let lastScroll = 0;
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu'); // تأكد من أن لديك class="nav-menu" في HTML

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('hide');
        header.classList.add('show');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('hide')) {
        header.classList.remove('show');
        header.classList.add('hide');
    } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
        header.classList.remove('hide');
        header.classList.add('show');
    }
    
    lastScroll = currentScroll;
}

function debounce(func, wait = 10) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

window.addEventListener('scroll', debounce(handleScroll));

// هامبرجر مينو
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // إيقاف تأثير التمرير عند فتح القائمة
    if (navMenu.classList.contains('active')) {
        header.classList.remove('hide');
        header.classList.add('show');
    }
});

// إغلاق القائمة عند التمرير
window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});