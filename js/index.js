// For the first typing effect (for the paragraph)
const text1 = "I design and develop optimized and user-friendly websites.";
let index1 = 0;
const typingElement1 = document.querySelector('.typing-text'); 

function typeMessage1() {
  if (index1 < text1.length) {
    typingElement1.textContent += text1.charAt(index1);
    index1++;
    setTimeout(typeMessage1, 50);
  }
}

// For the second typing effect (for the paragraph 2)
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

// Wait until the page is fully loaded before starting both typing effects
window.addEventListener('load', () => {
  typeMessage1(); // Start typing effect for the first paragraph
  setTimeout(typeMessage2, text1.length * 50); // Start typing effect for the second paragraph after the first one finishes
});