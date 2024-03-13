const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function glitchedLetterEffect(element) {
    let iterations = 0;
    let interval = setInterval(() => {
        element.innerText = element.innerText
            .split('')
            .map((_, index) => {
                if (iterations >= index)
                    return element.dataset.value.split(' ')[0][index];
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

function backgroundTextEffect() {
    let lastWordIndex = 0;

    function clearWord(element) {
        setInterval(() => {
            element.innerText = element.innerText.slice(0, -1);
        }, 500);
    }

    function writeWord(element, word) {
        word.map((letter) => {
            element.innerText += letter;
        });
    }

    let element = document.querySelector('.terminal-texting');

    clearWord(element);
    console.log(element.dataset.value.split(' '));
    setInterval(() => {
        if (element.innerText.length == 0) {
            console.log(element.dataset.value.split(' ')[lastWordIndex]);
            writeWord(
                element,
                element.dataset.value.split(' ')[lastWordIndex].split('')
            );
            lastWordIndex++;
        }
        if (lastWordIndex == element.dataset.value.split(' ').length)
            lastWordIndex = 0;
    }, 100);
}

// callGlitched();
backgroundTextEffect();
