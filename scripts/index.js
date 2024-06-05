let redInp = document.getElementById('red');
let greenInp = document.getElementById('green');
let blueInp = document.getElementById('blue');
let button = document.querySelector('button')
let resultDiv = document.getElementById('result');

button.addEventListener('click', () => {
    let r = parseInt(redInp.value, 10);
    let g = parseInt(greenInp.value, 10);
    let b = parseInt(blueInp.value, 10);

    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        let hex = rgbToHex(r, g, b);
        resultDiv.textContent = `Hex: #${hex}`;
    } else {
        resultDiv.textContent = 'Invalid RGB values';
    }
});

function rgbToHex(r, g, b) {
    let redHex = r.toString(16).padStart(2, '0');
    let greenHex = g.toString(16).padStart(2, '0');
    let blueHex = b.toString(16).padStart(2, '0');
    return `${redHex}${greenHex}${blueHex}`;
}