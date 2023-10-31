import ColumnRepository from "../repositories/Column.repository";
import BoardRepository from "../repositories/Board.repository";
import { Column } from "../models";
import { CreateColumnBoardValidate } from "../validations/services/CreateColumnBoardValidate";
import { ErrorValidate } from "../validations/Validate";
import { MessageResponse } from "../types/DTOs/IResponse";

export default class CreateColumnBoardValidService {
  constructor(
    private columnRepository: ColumnRepository,
    private boardRepository: BoardRepository
  ) {}

  async execute(column: Column): Promise<Record<string, any>> {
    const board = await this.boardRepository.findById(column.getBoardId);
    const errors = new ErrorValidate();

    if (CreateColumnBoardValidate.isValid(errors, board)) {
      await this.columnRepository.create(column);

      board.setColumnsId([...board.getColumnsId, column.getId]);
      await this.boardRepository.update(board);

      return {
        data: { name: "success", message: "Column created successfully!" },
        statusCode: 201,
      };
    }

    return { data: errors.list, statusCode: 400 };
  }
}
