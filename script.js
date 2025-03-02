// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Back to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Swipe Functionality for Skills Section (Improved for Mobile)
const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
  let touchStartX = 0;
  let touchCurrentX = 0;
  let isDragging = false;

  // Ensure the container is scrollable and visible
  skillsContainer.style.overflowX = 'scroll'; // Force scroll on mobile
  skillsContainer.style.webkitOverflowScrolling = 'touch'; // Smooth scrolling on iOS

  skillsContainer.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
  });

  skillsContainer.addEventListener('touchmove', e => {
    if (!isDragging) return;
    touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX - touchCurrentX;
    skillsContainer.scrollLeft += diff; // Update scroll position
    touchStartX = touchCurrentX; // Reset start point for continuous scrolling
    e.preventDefault(); // Prevent vertical scroll interference
  });

  skillsContainer.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Ensure full width is scrollable
  const skillBoxes = document.querySelectorAll('.skill-box');
  const totalWidth = skillBoxes.length * (150 + 15); // 150px width + 15px gap
  skillsContainer.style.width = `${totalWidth}px`; // Set explicit width for full scroll
}

// Bokeh Cursor Movement (Fixed to Follow Pointer Accurately)
const cursor = document.querySelector('.bokeh-cursor');
document.addEventListener('mousemove', e => {
  // Adjust for the -50% transform in CSS by calculating offsets
  const cursorWidth = cursor.offsetWidth; // Get cursor width
  const cursorHeight = cursor.offsetHeight; // Get cursor height
  cursor.style.left = `${e.pageX - cursorWidth / 2}px`; // Center horizontally
  cursor.style.top = `${e.pageY - cursorHeight / 2}px`; // Center vertically
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
