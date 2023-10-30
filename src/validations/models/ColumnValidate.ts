import { Column } from "../../models";
import { ErrorValidate } from "../Validate";

export class ColumnValidate {
  static isValid(errors: ErrorValidate, modelEntity: Column) {
    const todosId = modelEntity.getTodosId;
    const todosIdSet = new Set(todosId);

    if (!modelEntity.getName) {
      errors.addError({
        name: "name",
        result: "Name is required",
      });
    }

    if (todosId.length !== todosIdSet.size) {
      errors.addError({
        name: "todosId",
        result: "TodosId is duplicated",
      });
    }

    if (!modelEntity.getBoardId) {
      errors.addError({
        name: "boardId",
        result: "BoardId is required",
      });
    }

    return !errors.hasErrors();
  }
}
