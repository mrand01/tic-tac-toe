export class Cell {
  private _element: HTMLDivElement;
  private _index: number;

  constructor(index: number) {
    this._index = index;
    this._element = this._buildElement();
  }

  private _buildElement(): HTMLDivElement {
    const element: HTMLDivElement = document.createElement('div');

    element.classList.add('cell', 'unselectable');
    element.id = this._index.toString();
    element.style.gridColumn = `col${this._index % 3}`;
    element.style.gridRow = `row${Math.floor(this._index / 3)}`;

    return element;
  }

  public get element(): HTMLDivElement {
    return this._element;
  }
}
