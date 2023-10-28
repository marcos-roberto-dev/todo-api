import ModelBase from "../types/ModelBase.type";

export default class Todo extends ModelBase {
  protected _columnId: string;
  protected _boardId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    columnId: string,
    boardId: string
  ) {
    super(id, name, description);
    this._columnId = columnId;
    this._boardId = boardId;
  }

  get columnId(): string {
    return this._columnId;
  }

  get boardId(): string {
    return this._boardId;
  }
}
