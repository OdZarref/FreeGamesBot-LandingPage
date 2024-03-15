const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let writting = false;
let erasing = false;

function glitchedLetterEffect(element) {
    let iterations = 0;
    let interval = setInterval(() => {
        element.innerText = element.innerText
            .split('')
            .map((_, index) => {
                console.log(element.dataset.value);
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

function backgroundTextEffect() {
    function clearWord(element) {
        erasing = true;
        setInterval(() => {
            element.innerText = element.innerText.slice(0, -1);
        }, 500);
        erasing = false;
    }

    function writeWord(element, word) {
        writting = true;
        word = word.split('');
        let index = 0;

        let interval = setInterval(function () {
            console.log(element.innerText + word[index]);
            element.innerText = element.innerText + word[index];
            if (index == word.length - 1) clearInterval(interval);
            index++;
        }, 1000);
    }

    let lastWordIndex = 0;
    let element = document.querySelector('.terminal-texting');

    setInterval(() => {
        if (element.innerText.length == 0 && writting == false) {
            writeWord(element, element.dataset.value.split(' ')[2]);
            lastWordIndex++;
        }

        if (lastWordIndex == element.dataset.value.split(' ').length)
            lastWordIndex = 0;

        if (erasing == false && writting == false) {
            clearWord(element);
        }
    }, 100);
}

callGlitched();
