const grid = document.querySelector('.grid');
const change = document.querySelector('#change');

function createGrid(size) {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let j = 1; j <= size; j++) {
      const box = document.createElement('div');
      box.setAttribute('class', 'box');
      row.appendChild(box);
    }
    grid.appendChild(row);
  }
}

function createTrail() {
  const boxes = document.querySelectorAll('.box');
  const color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;

  boxes.forEach((box) => {
    box.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = color;
    });
  });
}

function getColor() {
  return Math.floor(Math.random() * 256);
}

change.addEventListener('click', () => {
  let size = Number(prompt('Provide requirement'));
  grid.innerHTML = '';
  createGrid(size);
  createTrail();
});

createGrid(16);
createTrail();
