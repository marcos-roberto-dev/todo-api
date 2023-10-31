import { Column } from "../../models";
import { ErrorValidate } from "../Validate";

export class ColumnValidate {
  static isValid(errors: ErrorValidate, modelEntity: Column) {
    const todosId = modelEntity.getTodosId;
    const todosIdSet = new Set(todosId);

    if (!modelEntity.getName) {
      errors.addError({
        name: "name",
        data: "Name is required",
      });
    }

    if (todosId.length !== todosIdSet.size) {
      errors.addError({
        name: "todosId",
        data: "TodosId is duplicated",
      });
    }

    if (!modelEntity.getBoardId) {
      errors.addError({
        name: "boardId",
        data: "BoardId is required",
      });
    }

    return !errors.hasErrors();
  }
}
