import { Board } from "../../models";
import { ErrorValidate } from "../Validate";

export class BoardValidate {
  static isValid(errors: ErrorValidate, modelEntity: Board) {
    const columnsId = modelEntity.getColumnsId;
    const columnsIdSet = new Set(columnsId);
    const todosId = modelEntity.getTodosId;
    const todosIdSet = new Set(todosId);

    if (!modelEntity.getName) {
      errors.addError({
        name: "name",
        message: "Name is required",
      });
    }

    if (columnsId.length !== columnsIdSet.size) {
      errors.addError({
        name: "columnsId",
        message: "ColumnsId is duplicated",
      });
    }

    if (todosId.length !== todosIdSet.size) {
      errors.addError({
        name: "todosId",
        message: "TodosId is duplicated",
      });
    }

    return !errors.hasErrors();
  }
}
