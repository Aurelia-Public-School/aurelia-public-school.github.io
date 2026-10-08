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

  // WhatsApp Admissions Inquiry Form Handler
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const parentName = document.getElementById('parentName')?.value.trim() || '';
      const childGrade = document.getElementById('childGrade')?.value.trim() || '';
      const parentMessage = document.getElementById('parentMessage')?.value.trim() || '';

      let text = 'Hello Aurelia Public School,\nI would like to inquire about admissions.';

      if (parentName) {
        text += `\n\n• Parent / Guardian: ${parentName}`;
      }
      if (childGrade) {
        text += `\n• Child's Age / Proposed Grade: ${childGrade}`;
      }
      if (parentMessage) {
        text += `\n• Note: ${parentMessage}`;
      }

      const whatsappUrl = `https://wa.me/919745483774?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank') || (window.location.href = whatsappUrl);
    });
  }
});
