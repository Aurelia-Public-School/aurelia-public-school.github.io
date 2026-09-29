// Aurelia Public School - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
          }
        }
      }
    });
  });

  // Simple inquiry trigger handler
  const inquiryBtn = document.getElementById('inquirySubmit');
  if (inquiryBtn) {
    inquiryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Thank you for your interest in Aurelia Public School. Our admissions desk will be in touch shortly!');
    });
  }
});
