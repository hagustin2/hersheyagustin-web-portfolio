
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
