import ModelBase from "../types/ModelBase.type";

export default class Column extends ModelBase {
  protected _todosId: string[];
  protected _boardId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    todosId: string[],
    boardId: string
  ) {
    super(id, name, description);
    this._todosId = todosId;
    this._boardId = boardId;
  }

  get todosId(): string[] {
    return this._todosId;
  }

  get boardId(): string {
    return this._boardId;
  }
}
