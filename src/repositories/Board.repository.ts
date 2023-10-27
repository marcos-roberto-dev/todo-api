import Board from "../models/Board.model";
import Repository from "../types/Repository.type";

export default class BoardRepositoryMemory implements Repository<Board> {
  private boards: Board[] = [];

  async create(modelBoard: Board): Promise<void> {
    const findIndex = this.boards.findIndex(
      (board) => board.name === modelBoard.name
    );
    const hasBoardInRepository = findIndex !== -1;

    if (hasBoardInRepository) {
      throw new Error("Board already exists");
    }
    this.boards.push(modelBoard);
  }

  async update(modelBoard: Board): Promise<void> {
    const findIndex = this.boards.findIndex(
      (board) => board.id === modelBoard.id
    );
    this.boards[findIndex] = modelBoard;
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.boards.findIndex((board) => board.id === id);
    this.boards.splice(findIndex, 1);
  }

  async findById(id: string): Promise<Board> {
    const findIndex = this.boards.findIndex((board) => board.id === id);
    return this.boards[findIndex];
  }

  async findAll(): Promise<Board[]> {
    return this.boards;
  }
}