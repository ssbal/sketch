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
      box.classList.add('box', 'box-border');
      row.appendChild(box);
    }
    grid.appendChild(row);
  }

  const boxes = document.querySelectorAll('.box');
  gridToggle.addEventListener('click', () => {
    boxes.forEach((box) => box.classList.toggle('box-border'));
  });
}

function createTrail() {
  const boxes = document.querySelectorAll('.box');
  const color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;

  boxes.forEach((box) => {
    let isVisited = false;

    box.addEventListener('mouseover', (event) => {
      if (!isVisited) {
        event.target.style.backgroundColor = color;
        isVisited = true;
      } else if (isVisited) {
        /* remove event listener after fulfilling the task to improve speed */

        event.target.style.backgroundColor = 'red';
        console.log(Math.random() * 100);
      }
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
