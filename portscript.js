const phrases = [ "javaScript" ,"Mongo DB","Express", "React" ,"NodeJs","Css", "Git & GitHub","Web Development","HTML"];
let index = 0;
let charIndex = 0;
const scrollElement = document.getElementById('scroll');

function type() {
    const currentPhrase = phrases[index];
    scrollElement.textContent = currentPhrase.slice(0, charIndex);
    charIndex++;

    if (charIndex <= currentPhrase.length) {
        setTimeout(type, 180); 
    } else {
        charIndex = 0;
        index = (index + 1) % phrases.length;
        setTimeout(type, 1500); 
    }
}

type();
