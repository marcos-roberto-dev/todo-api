import ColumnModel from "../models/Column.model";

export default class Column extends ColumnModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public todosId: string[],
    public boardId: string
  ) {
    super(id, name, description, todosId, boardId);
  }

  addTodoId(todoId: string) {
    const addedTodoId = [...this.todosId, todoId];
    return new Column(
      this.id,
      this.name,
      this.description,
      addedTodoId,
      this.boardId
    );
  }

  addBoardId(boardId: string) {
    return new Column(
      this.id,
      this.name,
      this.description,
      this.todosId,
      boardId
    );
  }

  removeTodoId(todoId: string) {
    const removedTodoId = this.todosId.filter((id) => id !== todoId);
    return new Column(
      this.id,
      this.name,
      this.description,
      removedTodoId,
      this.boardId
    );
  }
}
