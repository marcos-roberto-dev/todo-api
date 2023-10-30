import ModelBase from "../types/ModelBase.type";

export default class Board extends ModelBase {
  protected columnsId: string[];
  protected todosId: string[];

  constructor(
    id: string,
    name: string,
    description: string,
    columnsId: string[],
    todosId: string[]
  ) {
    super(id, name, description);
    this.columnsId = columnsId;
    this.todosId = todosId;
  }

  get getColumnsId(): string[] {
    return this.columnsId;
  }

  get getTodosId(): string[] {
    return this.todosId;
  }

  setColumnsId(columnsId: string[]): void {
    this.columnsId = columnsId;
  }

  setTodosId(todosId: string[]): void {
    this.todosId = todosId;
  }
}
