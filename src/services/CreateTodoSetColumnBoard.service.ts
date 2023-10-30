import { Todo } from "../models";
import BoardRepositoryMemory from "../repositories/Board.repository";
import ColumnRepositoryMemory from "../repositories/Column.repository";
import TodoRepositoryMemory from "../repositories/Todo.repository";
import { MessageResponse } from "../types/DTOs/IResponse";
import { ErrorValidate } from "../validations/Validate";
import { CreateTodoSetColumnBoardValidate } from "../validations/services/CreateTodoSetColumnBoardValidate";

export default class CreateTodoSetColumnBoardService {
  constructor(
    private todoRepository: TodoRepositoryMemory,
    private columnRepository: ColumnRepositoryMemory,
    private boardRepository: BoardRepositoryMemory
  ) {}

  async execute(todo: Todo): Promise<MessageResponse> {
    const column = await this.columnRepository.findById(todo.getColumnId);
    const board = await this.boardRepository.findById(todo.getBoardId);

    const errors = new ErrorValidate();
    if (CreateTodoSetColumnBoardValidate.isValid(errors, column, board)) {
      await this.todoRepository.create(todo);
      column.setTodosId([...column.getTodosId, todo.getId]);
      await this.columnRepository.update(column);
      board.setTodosId([...board.getTodosId, todo.getId]);
      await this.boardRepository.update(board);

      return {
        message: [{ name: "success", message: "Todo created successfully!" }],
        statusCode: 200,
      };
    }

    return {
      message: errors.list,
      statusCode: 400,
    };
  }
}
