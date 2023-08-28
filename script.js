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
  let [red, green, blue] = [getColor(), getColor(), getColor()];

  boxes.forEach((box) => {
    let isVisited = false;
    box.addEventListener('mouseover', (event) => {
      if (!isVisited) {
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        isVisited = true;
      } else if (isVisited) {
        const bgColorLength = event.target.style.backgroundColor.length;

        const bgColorString = event.target.style.backgroundColor
          .slice(4, bgColorLength - 1)
          .split(', ');

        let [darkRed, darkGreen, darkBlue] = [
          getDarkColor(+bgColorString[0]),
          getDarkColor(+bgColorString[1]),
          getDarkColor(+bgColorString[2]),
        ];

        if (darkRed <= 10) darkRed = 0;
        if (darkGreen <= 10) darkGreen = 0;
        if (darkBlue <= 10) darkBlue = 0;

        event.target.style.backgroundColor = `rgb(${darkRed}, ${darkGreen}, ${darkBlue})`;

        if (darkRed === 0 && darkGreen === 0 && darkBlue === 0) {
          event.target.removeEventListener('mouseover', () => {});
        }
      }
    });
  });
}

function getColor() {
  return Math.floor(Math.random() * 256);
}

function getDarkColor(color) {
  return color * 0.9;
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
