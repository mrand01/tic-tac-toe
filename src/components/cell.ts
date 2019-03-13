export function Cell(index: number): HTMLDivElement {
  const element: HTMLDivElement = document.createElement('div');

  element.classList.add('cell');
  element.style.gridColumn = `col${index % 3}`;
  element.style.gridRow = `row${Math.floor(index / 3)}`;

  return element;
}
