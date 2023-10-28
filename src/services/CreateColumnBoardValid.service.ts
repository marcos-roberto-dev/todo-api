import ColumnRepository from "../repositories/Column.repository";
import BoardRepository from "../repositories/Board.repository";
import { Column } from "../models";

export default class CreateColumnBoardValidService {
  constructor(
    private columnRepository: ColumnRepository,
    private boardRepository: BoardRepository
  ) {}

  async execute(column: Column): Promise<void> {
    const board = await this.boardRepository.findById(column.boardId);

    if (!board) {
      throw new Error("Board not found");
    }

    await this.columnRepository.create(column);

    board.setColumnsId([...board.columnsId, column.id]);
    await this.boardRepository.update(board);
  }
}
