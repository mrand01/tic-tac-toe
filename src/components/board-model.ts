export class BoardModel {
  private _nextPlayer: 'x' | 'o' = 'x';
  private _state: Array<'x' | 'o'>;

  constructor() {
    this._state = new Array(9);
  }

  public detectWinner(): 'x' | 'o' | undefined {
    const conditions: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (const condition of conditions) {
      const [a, b, c]: number[] = condition;

      if (this._state[a] && this._state[a] === this._state[b] && this._state[a] === this._state[c]) {
        return this._state[a];
      }
    }

    return undefined;
  }

  public toggleNextPlayer(): void {
    this._nextPlayer = this._nextPlayer === 'x' ? 'o' : 'x';
  }

  public get nextPlayer(): 'x' | 'o' {
    return this._nextPlayer;
  }

  public get state(): string[] {
    return this._state;
  }
}
