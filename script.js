const grid = document.querySelector('.grid');

for (let i = 1; i <= 16; i++) {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  row.style.height = '20px';

  for (let j = 1; j <= 16; j++) {
    const box = document.createElement('span');
    box.setAttribute('class', 'box');
    box.style.width = '20px';
    box.style.height = '20px';

    row.appendChild(box);
  }

  grid.appendChild(row);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'orangered';
  });
});
