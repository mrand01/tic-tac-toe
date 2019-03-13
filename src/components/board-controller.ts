import { Board } from './board';
import { BoardModel } from './board-model';

export class BoardController {
  private _model: BoardModel;
  private _view: Board;

  constructor(view: Board) {
    this._model = new BoardModel();

    this._view = view;
    this._view.element.onclick = this._handleClick.bind(this);
  }

  private _handleClick(event: MouseEvent): any {
    const cell: HTMLDivElement = event.target as HTMLDivElement;
    const index: number = Number(cell.id);

    cell.textContent = this._model.state[index] = this._model.nextPlayer;

    this._model.toggleNextPlayer();

    const winner: 'x' | 'o' | undefined = this._model.detectWinner();

    if (winner) {
      alert(`${winner} WINS!!!`);
    }
  }
}
