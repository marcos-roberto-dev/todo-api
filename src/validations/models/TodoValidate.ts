import { Todo } from "../../models";
import { ErrorValidate } from "../Validate";

export class TodoValidate {
  static isValid(errors: ErrorValidate, modelEntity: Todo) {
    if (!modelEntity.name) {
      errors.addError({
        name: "name",
        message: "Name is required",
      });
    }

    if (!modelEntity.columnId) {
      errors.addError({
        name: "columnId",
        message: "ColumnId is required",
      });
    }

    if (!modelEntity.boardId) {
      errors.addError({
        name: "boardId",
        message: "BoardId is required",
      });
    }

    return !errors.hasErrors();
  }
}
