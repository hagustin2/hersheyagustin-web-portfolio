// For the first typing effect (for the paragraph)
const text = "I design and develop optimized and user-friendly websites.";
let index = 0;
const typingElement = document.querySelector('.typing-text'); 

function typeMessage1() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeMessage1, 50);
  }
}

// For the second typing effect (for the header)
const heading = "Let’s collaborate and create something amazing!";
let contact = 0;
const typeElement = document.querySelector('.type-text'); 

function typeMessage2() {
  if (contact < heading.length) {
    typeElement.textContent += heading.charAt(contact);
    contact++;
    setTimeout(typeMessage2, 50);
  }
}

// Running both typing effects on page load
window.addEventListener('load', () => {
  typeMessage1();
  typeMessage2();
});