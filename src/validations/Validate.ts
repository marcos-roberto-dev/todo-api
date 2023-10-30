export interface ErrorValidateData {
  name: string;
  message: string;
}

export class ErrorValidate {
  list: ErrorValidateData[] = [];

  addError(error: ErrorValidateData) {
    this.list.push(error);
  }

  hasErrors(): boolean {
    return this.list.length > 0;
  }
}
