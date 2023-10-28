import { Todo } from "../models";
import ColumnRepositoryMemory from "../repositories/Column.repository";
import TodoRepositoryMemory from "../repositories/Todo.repository";

export default class CreateTodoSetColumnBoardService {
  constructor(
    private todoRepository: TodoRepositoryMemory,
    private columnRepository: ColumnRepositoryMemory
  ) {}

  async execute(todo: Todo): Promise<void> {
    const column = await this.columnRepository.findById(todo.columnId);

    if (!column) {
      throw new Error("Column not found");
    }

    await this.todoRepository.create(todo);
    column.setTodosId([...column.todosId, todo.id]);
    await this.columnRepository.update(column);
  }
}
