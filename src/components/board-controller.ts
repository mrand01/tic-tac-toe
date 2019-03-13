import { Board } from './board';
import { BoardModel, TicTacSymbol } from './board-model';

export class BoardController {
  private _model: BoardModel;
  private _view: Board;

  constructor(view: Board) {
    this._model = new BoardModel(this._onStateUpdate.bind(this));

    this._view = view;
    this._view.element.onclick = this._handleClick.bind(this);
  }

  private _handleClick(event: MouseEvent): any {
    const cellElement: HTMLDivElement = event.target as HTMLDivElement;
    const index: number = Number(cellElement.id);

    if (!cellElement.textContent) {
      this._model.setState(index);
    }
  }

  private _onStateUpdate(state: string[]): void {
    for (let i: number = 0; i < state.length; i++) {
      const cellElement: HTMLDivElement = document.getElementById(i.toString()) as HTMLDivElement;

      cellElement.textContent = state[i] ? state[i] : '';
    }

    const winner: TicTacSymbol | undefined = this._model.detectWinner();

    if (winner) {
      const result: boolean = confirm(`${winner.toUpperCase()} WINS!  Click OK to restart.`);

      if (result) {
        this._model.reset();
      }
    }
  }
}
