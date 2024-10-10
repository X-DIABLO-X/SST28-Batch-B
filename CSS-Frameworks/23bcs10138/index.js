const text = 'Welcome to my portfolio';
const speed = 50; 

let i = 0;
const typingEffect = setInterval(() => {
    if (i < text.length) {
    document.getElementById('typing-text').innerHTML += text.charAt(i);
    i++;
    } else {
    clearInterval(typingEffect);
    }
}, speed);