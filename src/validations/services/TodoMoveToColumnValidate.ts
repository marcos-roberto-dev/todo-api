import { Column, Todo } from "../../models";
import { ErrorValidate } from "../Validate";
interface TodoMoveToColumnServiceValidateModel {
  todo: Todo;
  fromColumn: Column;
  toColumn: Column;
}

export class TodoMoveToColumnServiceValidate {
  static isValid(
    errors: ErrorValidate,
    { todo, fromColumn, toColumn }: TodoMoveToColumnServiceValidateModel
  ) {
    if (!todo) {
      errors.addError({
        name: "todo",
        message: "Todo not found",
      });
    }

    if (!fromColumn) {
      errors.addError({
        name: "fromColumn",
        message: "From column not found",
      });
    }

    if (!toColumn) {
      errors.addError({
        name: "toColumn",
        message: "To column not found",
      });
    }

    return !errors.hasErrors();
  }
}
