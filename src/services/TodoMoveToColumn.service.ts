import TodoRepository from "../repositories/Todo.repository";
import ColumnRepository from "../repositories/Column.repository";
import ITodoMoveToColumnRequestDTO from "../types/DTOs/ITodoMoveToColumnRequestDTO";

export default class TodoMoveToColumnService {
  constructor(
    private todoRepository: TodoRepository,
    private columnRepository: ColumnRepository
  ) {}

  async execute({
    todoId,
    toColumnId,
    fromColumnId,
  }: ITodoMoveToColumnRequestDTO): Promise<void> {
    const todo = await this.todoRepository.findById(todoId);
    const toColumn = await this.columnRepository.findById(toColumnId);
    const fromColumn = await this.columnRepository.findById(fromColumnId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    if (!toColumn) {
      throw new Error("To column not found");
    }

    if (!fromColumn) {
      throw new Error("From column not found");
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
  }
}
