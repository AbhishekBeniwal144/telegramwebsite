// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Back to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Swipe Functionality for All Sections (Skills, Bots, Channels, Groups)
function enableSwipe(container) {
  if (container) {
    let touchStartX = 0;
    let touchCurrentX = 0;
    let isDragging = false;

    // Ensure container is scrollable on mobile
    container.style.overflowX = 'scroll';
    container.style.webkitOverflowScrolling = 'touch'; // Smooth scrolling on iOS
    container.style.whiteSpace = 'nowrap'; // Prevent wrapping

    container.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      isDragging = true;
    });

    container.addEventListener('touchmove', e => {
      if (!isDragging) return;
      touchCurrentX = e.touches[0].clientX;
      const diff = touchStartX - touchCurrentX;
      container.scrollLeft += diff;
      touchStartX = touchCurrentX;
      e.preventDefault(); // Prevent vertical scroll interference
    });

    container.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Set explicit width for full scrollability
    const items = container.querySelectorAll('.skill-box');
    const totalWidth = items.length * (150 + 15); // 150px width + 15px gap
    container.style.width = `${totalWidth}px`;
  }
}

// Apply swipe to all sections
const skillsContainer = document.querySelector('.skills-container');
const botsContainer = document.querySelector('#bots .items-container');
const channelsContainer = document.querySelector('#channels .items-container');
const groupsContainer = document.querySelector('#groups .items-container');

enableSwipe(skillsContainer);
enableSwipe(botsContainer);
enableSwipe(channelsContainer);
enableSwipe(groupsContainer);

// Bokeh Cursor Movement (Fixed)
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
