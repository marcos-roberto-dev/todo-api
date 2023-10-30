import ModelBase from "../types/ModelBase.type";

export default class Todo extends ModelBase {
  protected columnId: string;
  protected boardId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    columnId: string,
    boardId: string
  ) {
    super(id, name, description);
    this.columnId = columnId;
    this.boardId = boardId;
  }

  get getColumnId(): string {
    return this.columnId;
  }

  get getBoardId(): string {
    return this.boardId;
  }

  setColumnId(columnId: string): void {
    this.columnId = columnId;
  }

  setBoardId(boardId: string): void {
    this.boardId = boardId;
  }
}
