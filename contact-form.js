const sendBtn = document.getElementById('contact-form-send-btn');
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) =>
{
const name = event.target.sender.value;
const message = event.target.message.value;

const subject = encodeURIComponent(`${name} says hello!`);
const body = encodeURIComponent(message);

window.location.href = `mailto: et.angel.s@eduiteh.eu?subject=${subject}&body=${body}`;
});