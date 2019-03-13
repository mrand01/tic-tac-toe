export type TicTacSymbol = 'x' | 'o';

export class BoardModel {
  private _listener: (state: TicTacSymbol[]) => void;
  private _nextPlayer: TicTacSymbol;
  private _state: TicTacSymbol[];

  constructor(listener: (state: TicTacSymbol[]) => void) {
    this._listener = listener;
    this._nextPlayer = 'x';
    this._state = new Array(9);
  }

  public detectWinner(): TicTacSymbol | undefined {
    const conditions: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (const condition of conditions) {
      const [a, b, c]: number[] = condition;

      if (this._state[a] && this._state[a] === this._state[b] && this._state[a] === this._state[c]) {
        return this._state[a];
      }
    }

    return undefined;
  }

  public reset(): void {
    this._nextPlayer = 'x';
    this._state = new Array(9);
    this._listener(this._state);
  }

  public setState(index: number): void {
    this._state[index] = this._nextPlayer;
    this._toggleNextPlayer();
    this._listener(this._state);
  }

  private _toggleNextPlayer(): void {
    this._nextPlayer = this._nextPlayer === 'x' ? 'o' : 'x';
  }
}
