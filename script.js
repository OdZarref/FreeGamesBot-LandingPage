const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function glitchedLetterEffect(element) {
    let iterations = 0;
    let interval = setInterval(() => {
        element.innerText = element.innerText
            .split('')
            .map((letter, index) => {
                if (iterations >= index) return element.dataset.value[index];
                else return alphabet[Math.floor(Math.random() * 26)];
            })
            .join('')
            .toUpperCase();
        iterations += 1 / 3;
        if (iterations >= element.dataset.value.length) clearInterval(interval);
    }, 30);
}

function callGlitched() {
    document.querySelectorAll('.glitched').forEach((element) => {
        glitchedLetterEffect(element);
    });
}

callGlitched();
