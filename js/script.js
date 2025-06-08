// Select all elements with class 'animate-on-scroll'
const scrollElements = document.querySelectorAll('.animate-on-scroll');

function isInViewport(el, offset = 100) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset
  );
}

function handleScroll() {
  scrollElements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('active');
    } else {
      // Optional: remove class if you want animation to reset on scroll up
      // el.classList.remove('active');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Trigger on page load in case some elements are already visible
window.addEventListener('load', handleScroll);
