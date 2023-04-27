const aboutButton = document.querySelector('.js-about-button');
const aboutSection = document.querySelector('.js-about-section');

aboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const skillsButton = document.querySelector('.js-skills-button');
const skillsSection = document.querySelector('.js-skills-section');

skillsButton.addEventListener('click', () => {
  skillsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const projectsButton = document.querySelector('.js-projects-button');
const projectsSection = document.querySelector('.js-projects-section');

projectsButton.addEventListener('click', () => {
  projectsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const contactButton = document.querySelector('.js-contact-button');
const contactSection = document.querySelector('.js-contact-section');

contactButton.addEventListener('click', () => {
  contactSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});