import { Cell } from './cell';

export class Board {
  private _element: HTMLDivElement;

  constructor() {
    this._element = this._buildElement();
  }

  private _buildElement(): HTMLDivElement {
    const element: HTMLDivElement = document.createElement('div');

    element.classList.add('board');

    for (let i: number = 0; i < 9; i++) {
      const cell: Cell = new Cell(i);

      element.appendChild(cell.element);
    }

    return element;
  }

  public get element(): HTMLDivElement {
    return this._element;
  }
}
