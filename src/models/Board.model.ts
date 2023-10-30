import ModelBase from "../types/ModelBase.type";

export default class Board extends ModelBase {
  protected _columnsId: string[];
  protected _todosId: string[];

  constructor(
    id: string,
    name: string,
    description: string,
    columnsId: string[],
    todosId: string[]
  ) {
    super(id, name, description);
    this._columnsId = columnsId;
    this._todosId = todosId;
  }

  get columnsId(): string[] {
    return this._columnsId;
  }

  get todosId(): string[] {
    return this._todosId;
  }

  setColumnsId(columnsId: string[]): void {
    this._columnsId = columnsId;
  }

  setTodosId(todosId: string[]): void {
    this._todosId = todosId;
  }
}
