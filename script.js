function glitchedLetterEffect(element) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iterations = 0;
    let interval = setInterval(() => {
        element.innerText = element.innerText
            .split('')
            .map((_, index) => {
                if (iterations >= index) return element.dataset.value[index];
                else return alphabet[Math.floor(Math.random() * 26)];
            })
            .join('')
            .toUpperCase();
        if (element.getAttribute('faster')) iterations += 1.5;
        else iterations += 1 / 3;
        if (iterations >= element.dataset.value.length) clearInterval(interval);
    }, 30);
}

function callGlitched() {
    document.querySelectorAll('.glitched').forEach((element) => {
        glitchedLetterEffect(element);
    });
}

function callFadeIn() {
    function fadeIn(element) {
        element.style.opacity = '100';
    }
    document.querySelectorAll('.fade-in').forEach((element) => {
        fadeIn(element);
    });
}

function callBorders() {
    document.querySelector('.border-top').style.left = '0';
    document.querySelector('.border-middle').style.bottom = '0';
}

callFadeIn();
callBorders();
