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
window.addEventListener('load', () => {
  typeMessage1();

});

const text2 = "Let’s collaborate and create something amazing!";
let index2 = 0;
const typingElement2 = document.querySelector('.typing-text2');

function typeMessage2() {
  if (index2 < text2.length) {
    typingElement2.textContent += text2.charAt(index2);
    index2++;
    setTimeout(typeMessage2, 50); 
  }
}
window.addEventListener('load', () => {
  typeMessage1(); 
  setTimeout(typeMessage2, text1.length * 50); 
});