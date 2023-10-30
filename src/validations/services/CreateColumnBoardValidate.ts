import { Board } from "../../models";
import { ErrorValidate } from "../Validate";

export class CreateColumnBoardValidate {
  static isValid(errors: ErrorValidate, board: Board) {
    if (!board) {
      errors.addError({
        name: "board",
        result: "Board is not found",
      });
    }

    return !errors.hasErrors();
  }
}
