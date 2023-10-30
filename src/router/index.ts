import BoardRepositoryMemory from "../repositories/Board.repository";
import ColumnRepositoryMemory from "../repositories/Column.repository";
import TodoRepositoryMemory from "../repositories/Todo.repository";
import { Seeds } from "../utils/seeds";

export { default as boardRouter } from "./routes/board.routes";
export { default as columnRouter } from "./routes/column.routes";
export { default as todoRouter } from "./routes/todo.routes";

export const boardRepository = new BoardRepositoryMemory();
export const columnRepository = new ColumnRepositoryMemory();
export const todoRepository = new TodoRepositoryMemory();

Seeds({ boardRepository, columnRepository, todoRepository });
