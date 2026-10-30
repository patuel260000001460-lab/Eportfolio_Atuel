const yearSpan = document.getElementById('year');
const themeBtn = document.getElementById('theme-btn');
const contactBtn = document.getElementById('contact-btn');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('Thank you for visiting! Reach out to me via patuel@uic.edu.ph');
  });
}