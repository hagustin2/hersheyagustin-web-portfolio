const text = "I design and develop optimized and user-friendly websites.";
let index = 0;
const typingElement = document.querySelector('.typing-text'); 

function typeMessage() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeMessage, 50);
  }
}
window.onload = typeMessage;

const heading = "Let’s collaborate and create something amazing!";
let contact = 0;
const typeElement = document.querySelector('.type-text'); 

function typeMessage() {
  if (contact < heading.length) {
    typeElement.headingContent += heading.charAt(contact);
    contact++;
    setTimeout(typeMessage, 50);
  }
}
window.onload = typeMessage;