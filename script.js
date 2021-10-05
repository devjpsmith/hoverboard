const container = document.getElementById('container');
const colors = [
    '#e74c3c',
    '#8e44ad',
    '#3498db',
    '#e67e22',
    '#2ecc71',
];

const SQUARE_COUNT = 500;

for (let i = 0; i < SQUARE_COUNT; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => paint(square));
    square.addEventListener('mouseleave', () => clear(square));
    container.appendChild(square);
}

function paint(square) {
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function clear(square) {
    setTimeout(() => {
        square.style.background = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000';
    }, 200);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

