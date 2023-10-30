import { Board, Column } from "../../models";
import { ErrorValidate } from "../Validate";

export class CreateTodoSetColumnBoardValidate {
  static isValid(errors: ErrorValidate, column: Column, board: Board) {
    if (!column) {
      errors.addError({
        name: "column",
        message: "Column is not found",
      });
    }

    if (!board) {
      errors.addError({
        name: "board",
        message: "Board is not found",
      });
    }

    return !errors.hasErrors();
  }
}
