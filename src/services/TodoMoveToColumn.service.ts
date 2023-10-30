import TodoRepository from "../repositories/Todo.repository";
import ColumnRepository from "../repositories/Column.repository";
import ITodoMoveToColumnRequestDTO from "../types/DTOs/ITodoMoveToColumnRequestDTO";
import { ErrorValidate, ErrorValidateData } from "../validations/Validate";
import { TodoMoveToColumnServiceValidate } from "../validations/services/TodoMoveToColumnValidate";
import { RequestMoveTodoValidate } from "../validations/Requests/RequestMoveTodoValidate";
import { MessageResponse } from "../types/DTOs/IResponse";

export default class TodoMoveToColumnService {
  constructor(
    private todoRepository: TodoRepository,
    private columnRepository: ColumnRepository
  ) {}

  async execute({
    todoId,
    toColumnId,
    fromColumnId,
  }: ITodoMoveToColumnRequestDTO): Promise<MessageResponse> {
    const errorsToValidateParams = new ErrorValidate();

    if (
      !RequestMoveTodoValidate.isValid(errorsToValidateParams, {
        todoId,
        fromColumnId,
        toColumnId,
      })
    ) {
      return {
        message: errorsToValidateParams.list,
        statusCode: 400,
      };
    }

    const todo = await this.todoRepository.findById(todoId);
    const toColumn = await this.columnRepository.findById(toColumnId);
    const fromColumn = await this.columnRepository.findById(fromColumnId);

    const errorsToValidateService = new ErrorValidate();
    if (
      !TodoMoveToColumnServiceValidate.isValid(errorsToValidateService, {
        todo,
        fromColumn,
        toColumn,
      })
    ) {
      return {
        message: errorsToValidateService.list,
        statusCode: 400,
      };
    }

    todo.setColumnId(toColumn.id);
    await this.todoRepository.update(todo);

    const fromColumnTodos = fromColumn.todosId.filter(
      (todoIdFilter) => todoIdFilter !== todoId
    );
    fromColumn.setTodosId(fromColumnTodos);
    await this.columnRepository.update(fromColumn);

    const toColumnTodos = [...toColumn.todosId, todoId];
    toColumn.setTodosId(toColumnTodos);
    await this.columnRepository.update(toColumn);

    return {
      message: [{ name: "success", message: "Todo moved successfully!" }],
      statusCode: 200,
    };
  }
}
