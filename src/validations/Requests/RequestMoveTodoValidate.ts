import { Column } from "../../models";
import { ErrorValidate } from "../Validate";

interface RequestMoveTodoValidateDTO {
  todoId: string;
  fromColumnId: string;
  toColumnId: string;
}

export class RequestMoveTodoValidate {
  static isValid(errors: ErrorValidate, request: RequestMoveTodoValidateDTO) {
    if (!request.todoId) {
      errors.addError({
        name: "todoId",
        message: "TodoId is required",
      });
    }

    if (!request.fromColumnId) {
      errors.addError({
        name: "fromColumnId",
        message: "FromColumnId is required",
      });
    }

    if (!request.toColumnId) {
      errors.addError({
        name: "toColumnId",
        message: "ToColumnId is required",
      });
    }

    return !errors.hasErrors();
  }
}
