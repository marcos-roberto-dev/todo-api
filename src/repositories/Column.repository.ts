import Column from "../models/Column.model";
import Repository from "../types/Repository.type";

export default class ColumnRepositoryMemory implements Repository<Column> {
  private boards: Column[] = [];

  async create(modelColumn: Column): Promise<void> {
    this.boards.push(modelColumn);
  }

  async update(modelColumn: Column): Promise<void> {
    const findIndex = this.boards.findIndex(
      (board) => board.getId === modelColumn.getId
    );
    this.boards[findIndex] = modelColumn;
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.boards.findIndex((board) => board.getId === id);
    this.boards.splice(findIndex, 1);
  }

  async findById(id: string): Promise<Column> {
    const findIndex = this.boards.findIndex((board) => board.getId === id);
    return this.boards[findIndex];
  }

  async findAll(): Promise<Column[]> {
    return this.boards;
  }
}
