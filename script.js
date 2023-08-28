const grid = document.querySelector('.grid');
const change = document.querySelector('#change');
const gridToggle = document.querySelector('#grid');
const errorMsg = document.querySelector('.error');

function createGrid(size) {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let j = 1; j <= size; j++) {
      const box = document.createElement('div');
      box.classList.add('class', 'box', 'box-border');
      row.appendChild(box);
    }
    grid.appendChild(row);
  }

  gridToggle.addEventListener('click', () => {
    boxes.forEach((box) => box.classList.toggle('box-border'));
  });
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

  if (isNaN(size) || size > 100 || size <= 0) {
    errorMsg.textContent = 'Provide a positive integer less than 100';
  } else {
    grid.innerHTML = '';
    createGrid(size);
    createTrail();
    errorMsg.textContent = '';
  }
});

createGrid(16);
createTrail();
