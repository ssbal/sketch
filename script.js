const grid = document.querySelector('.grid');

function createGrid(size) {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.style.height = `${Math.floor(500 / size)}px`;

    for (let j = 1; j <= size; j++) {
      const box = document.createElement('span');
      box.setAttribute('class', 'box');
      box.style.width = `${Math.floor(500 / size) - 0.1}px`;
      box.style.height = `${Math.floor(500 / size)}px`;

      row.appendChild(box);
    }

    grid.appendChild(row);
  }
}

createGrid(20);

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'orangered';
  });
});
