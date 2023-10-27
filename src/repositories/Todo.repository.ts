import Todo from "../models/Todo.model";
import Repository from "../types/Repository.type";

export default class TodoRepositoryMemory implements Repository<Todo> {
  private boards: Todo[] = [];

  async create(modelTodo: Todo): Promise<void> {
    this.boards.push(modelTodo);
  }

  async update(modelTodo: Todo): Promise<void> {
    const findIndex = this.boards.findIndex(
      (board) => board.id === modelTodo.id
    );
    this.boards[findIndex] = modelTodo;
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.boards.findIndex((board) => board.id === id);
    this.boards.splice(findIndex, 1);
  }

  async findById(id: string): Promise<Todo> {
    const findIndex = this.boards.findIndex((board) => board.id === id);
    return this.boards[findIndex];
  }

  async findAll(): Promise<Todo[]> {
    return this.boards;
  }
}
