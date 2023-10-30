import { Column } from "../../models";
import { ErrorValidate } from "../Validate";

export class ColumnValidate {
  static isValid(errors: ErrorValidate, modelEntity: Column) {
    const todosId = modelEntity.todosId;
    const todosIdSet = new Set(todosId);

    if (!modelEntity.name) {
      errors.addError({
        name: "name",
        message: "Name is required",
      });
    }

    if (todosId.length !== todosIdSet.size) {
      errors.addError({
        name: "todosId",
        message: "TodosId is duplicated",
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
