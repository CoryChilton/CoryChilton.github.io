const yOffset = -65;

const aboutButton = document.querySelector('.js-about-button');
const aboutSection = document.querySelector('.js-about-section');

aboutButton.addEventListener('click', () => {
  window.scrollTo({top: aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth'});
});

const skillsButton = document.querySelector('.js-skills-button');
const skillsSection = document.querySelector('.js-skills-section');

skillsButton.addEventListener('click', () => {
  window.scrollTo({top: skillsSection.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth'});
});

const projectsButton = document.querySelector('.js-projects-button');
const projectsSection = document.querySelector('.js-projects-section');

projectsButton.addEventListener('click', () => {
  window.scrollTo({top: projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth'});
});

const contactButton = document.querySelector('.js-contact-button');
const contactSection = document.querySelector('.js-contact-section');

contactButton.addEventListener('click', () => {
  window.scrollTo({top: contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth'});
});

const mainSection = document.querySelector('main');
const nav = document.querySelector('nav');

function handleScroll() {
  const rect = mainSection.getBoundingClientRect();
  if (rect.top < 0) {
    nav.classList.add('stuck');
  } else {
    nav.classList.remove('stuck');
  }
}

window.addEventListener('scroll', handleScroll);