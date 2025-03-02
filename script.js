// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Back to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bokeh Cursor Movement
const cursor = document.querySelector('.bokeh-cursor');
document.addEventListener('mousemove', e => {
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;
  cursor.style.left = `${e.pageX - cursorWidth / 2}px`;
  cursor.style.top = `${e.pageY - cursorHeight / 2}px`;
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
