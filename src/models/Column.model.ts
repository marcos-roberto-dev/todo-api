import ModelBase from "../types/ModelBase.type";

export default class Column extends ModelBase {
  protected todosId: string[];
  protected boardId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    todosId: string[],
    boardId: string
  ) {
    super(id, name, description);
    this.todosId = todosId;
    this.boardId = boardId;
  }

  get getTodosId(): string[] {
    return this.todosId;
  }

  get getBoardId(): string {
    return this.boardId;
  }

  setTodosId(todosId: string[]): void {
    this.todosId = todosId;
  }

  setBoardId(boardId: string): void {
    this.boardId = boardId;
  }
}
