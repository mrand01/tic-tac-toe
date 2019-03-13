import { Board } from './components/board';
import { BoardController } from './components/board-controller';
import './index.css';

const board: Board = new Board();
const boardController: BoardController = new BoardController(board);

document.body.appendChild(board.element);

export default boardController;
