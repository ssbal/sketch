const grid = document.querySelector('.grid');

for (let i = 1; i <= 16; i++) {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  /**
   * Alternative via CSS
   * 1. Create a row for every sixteen divs through for loops
   * 2. Now add flexbox to that particluar row for every particular row of grid
   */
  for (let j = 1; j <= 16; j++) {
    const box = document.createElement('span');
    box.setAttribute('class', 'box');
    row.appendChild(box);
    box.textContent = i;
  }

  grid.appendChild(row);
}
