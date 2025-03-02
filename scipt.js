// Hamburger Menu Toggle
function toggleMenu() {
const menu = document.querySelector('.menu');
menu.classList.toggle('active');
}

// Back to Top Function
function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Swipe Functionality for Skills Only (No Infinite Scroll)
const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
let touchStartX = 0;
let touchMoveX = 0;

skillsContainer.addEventListener('touchstart', e => {
touchStartX = e.touches[0].clientX;
});

skillsContainer.addEventListener('touchmove', e => {
touchMoveX = e.touches[0].clientX;
const diff = touchStartX - touchMoveX;
skillsContainer.scrollLeft += diff;
touchStartX = touchMoveX;
});
}

// Bokeh Cursor Movement
const cursor = document.querySelector('.bokeh-cursor');
document.addEventListener('mousemove', e => {
cursor.style.left = e.pageX + 'px';
cursor.style.top = e.pageY + 'px';
});

// Scroll Animation
function handleScrollAnimation() {
const elements = document.querySelectorAll('.animate-on-scroll');
elements.forEach(element => {
const rect = element.getBoundingClientRect();
const windowHeight = window.innerHeight;
if (rect.top < windowHeight - 100) {
element.classList.add('visible');
}
});
}
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);