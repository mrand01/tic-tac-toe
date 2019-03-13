import { Cell } from './cell';

export function Board(): HTMLDivElement {
  const state: any[] = new Array(9);
  const element: HTMLDivElement = document.createElement('div');

  element.classList.add('board');

  for (let i: number = 0; i < state.length; i++) {
    const cell: HTMLDivElement = Cell(i);

    element.appendChild(cell);
  }

  return element;
}
