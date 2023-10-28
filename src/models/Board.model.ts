import ModelBase from "../types/ModelBase.type";

export default class Board extends ModelBase {
  protected _columnsId: string[];

  constructor(
    id: string,
    name: string,
    description: string,
    columnsId: string[]
  ) {
    super(id, name, description);
    this._columnsId = columnsId;
  }

  get columnsId(): string[] {
    return this._columnsId;
  }

  setColumnsId(columnsId: string[]): void {
    this._columnsId = columnsId;
  }
}
