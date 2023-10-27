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

    todo.columnId = toColumn.id;
    await this.todoRepository.update(todo);

    // remover o todo da coluna de origem
    const fromColumnTodos = fromColumn.todosId.filter(
      (todoIdFilter) => todoIdFilter !== todoId
    );
    fromColumn.todosId = fromColumnTodos;
    await this.columnRepository.update(fromColumn);

    // adicionar o todo na coluna de destino
    const toColumnTodos = [...toColumn.todosId, todoId];
    toColumn.todosId = toColumnTodos;
    await this.columnRepository.update(toColumn);
  }
}
