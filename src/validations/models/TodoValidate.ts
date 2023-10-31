import { Todo } from "../../models";
import { ErrorValidate } from "../Validate";

export class TodoValidate {
  static isValid(errors: ErrorValidate, modelEntity: Todo) {
    if (!modelEntity.getName) {
      errors.addError({
        name: "name",
        message: "Name is required",
      });
    }

    if (!modelEntity.getColumnId) {
      errors.addError({
        name: "columnId",
        message: "ColumnId is required",
      });
    }

    if (!modelEntity.getBoardId) {
      errors.addError({
        name: "boardId",
        message: "BoardId is required",
      });
    }

    return !errors.hasErrors();
  }
}
