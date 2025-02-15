/*Intro animation*/
const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('appear');
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove('appear');
        span.classList.add('fade');
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = '-100vh';
  }, 2000);
});

/*Show menu*/
const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show_menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

/*Active and remove menu*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show_menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*Auto write text*/

var app = document.getElementById('autoWrite');

var typewriter = new Typewriter(app, {
  strings: [
    'a Web Developer',
    'Coding Enthusiast',
    'Lifelong Learner',
    'Avid reader',
  ],
  loop: true,
  autoStart: true,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home_title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home_img', { delay: 400 });
sr.reveal('.home_social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay: 400 });
sr.reveal('.about_text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', {});
sr.reveal('.skills_data', { interval: 200 });
sr.reveal('.skills_img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work_img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact_input', { interval: 200 });

/*Toggle dark mode*/
const toggleDarkMode = document.getElementById('toggle');

toggleDarkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.getElementById('head').classList.toggle('dark');
});
document.body.classList.toggle('dark');
document.getElementById('head').classList.toggle('dark');

/*Particles.js*/
particlesJS.load('particles-js', 'assets/particles.json');

// javascript contact form validation
function validateName(input) {
  const nameError = document.getElementById('nameError');
  const nameValue = input.value.trim();

  if (nameValue.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters';
    nameError.classList.remove('valid');
  } else {
    nameError.textContent = '✓';
    nameError.classList.add('valid');
  }
}

function validateEmail(input) {
  const emailError = document.getElementById('emailError');
  const emailValue = input.value.trim();

  if (!emailValue.includes('@') || !emailValue.includes('.')) {
    emailError.textContent = 'Enter a valid email address';
    emailError.classList.remove('valid');
  } else {
    emailError.textContent = '✓';
    emailError.classList.add('valid');
  }
}

function validateMessage(input) {
  const messageError = document.getElementById('messageError');
  const messageValue = input.value.trim();

  if (messageValue.length < 5) {
    messageError.textContent = 'Message must be at least 5 characters';
    messageError.classList.remove('valid');
  } else {
    messageError.textContent = '✓';
    messageError.classList.add('valid');
  }
}

function validateForm() {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="text"]');

  validateName(nameInput);
  validateEmail(emailInput);
  validateMessage(messageInput);

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  if (
    !nameError.classList.contains('valid') ||
    !emailError.classList.contains('valid') ||
    !messageError.classList.contains('valid')
  ) {
    return false; // Prevent form submission if there are errors
  }

  return true;
}
