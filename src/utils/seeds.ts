import { Board, Column, Todo } from "../models";
import BoardRepositoryMemory from "../repositories/Board.repository";
import ColumnRepositoryMemory from "../repositories/Column.repository";
import TodoRepositoryMemory from "../repositories/Todo.repository";

interface SeedsProps {
  boardRepository: BoardRepositoryMemory;
  columnRepository: ColumnRepositoryMemory;
  todoRepository: TodoRepositoryMemory;
}

export function Seeds({
  boardRepository,
  columnRepository,
  todoRepository,
}: SeedsProps) {
  const board = new Board(
    "board_id_mock_1",
    "Board generico",
    "",
    ["column_id_mock_1", "column_id_mock_2"],
    []
  );
  const column1 = new Column(
    "column_id_mock_1",
    "Coluna generica 1",
    "",
    ["todo_id_mock_1"],
    board.id
  );
  const column2 = new Column(
    "column_id_mock_2",
    "Coluna generica 2 ok ",
    "",
    [],
    board.id
  );
  const todo = new Todo(
    "todo_id_mock_1",
    "Todo generico",
    "",
    column1.id,
    board.id
  );

  boardRepository.create(board);
  columnRepository.create(column1);
  columnRepository.create(column2);
  todoRepository.create(todo);
}
