import './src/scss/main.scss';

// requirements
const convert = require('color-convert');

// Variables
const input = document.querySelector('.input');
const rgbField = document.querySelector('.rgbField');
const hslField = document.querySelector('.hslField');
const cmykField = document.querySelector('.cmykField');
const colorBackground = document.querySelector('.colorBackground');


// Change Background Color
function changeBackground() {
    if (input.value.startsWith('#')) {
        colorBackground.style.background = input.value;
    } else {
        colorBackground.style.background = `#${input.value}`;
    }
}

// Color Conversion
function colorConverter() {
    const colorCode = input.value;
    const rgb = convert.hex.rgb(colorCode);
    const hsl = convert.hex.hsl(colorCode);
    const cmyk = convert.hex.cmyk(colorCode);

    console.log(hsl[1]);

    rgbField.innerHTML = `${rgb}`;
    hslField.innerHTML = `${hsl}`;
    cmykField.innerHTML = `${cmyk}`;
}

input.addEventListener('keyup',  () => {
    setTimeout(() => {
        changeBackground();
        colorConverter();
    }, 1200);
});