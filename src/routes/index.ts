import BoardRepositoryMemory from "../repositories/Board.repository";
import ColumnRepositoryMemory from "../repositories/Column.repository";
import TodoRepositoryMemory from "../repositories/Todo.repository";
import { Seeds } from "../utils/seeds";

export { default as boardRouter } from "./board.routes";
export { default as columnRouter } from "./column.routes";

export const boardRepository = new BoardRepositoryMemory();
export const columnRepository = new ColumnRepositoryMemory();
export const todoRepository = new TodoRepositoryMemory();

Seeds({ boardRepository, columnRepository, todoRepository });
