// extenda a classe TodoModel para a classe Todo
// essa classe vai ter os seguintes métodos:
// - metodo 1:
// -- retorna uma nova instância de Todo
// -- adicionando um novo columnId a propriedade columnId
// - metodo 2:
// -- retorna uma nova instância de Todo
// -- adionando um novo boardId a propriedade boardId

import TodoModel from "../models/Todo.model";

export default class Todo extends TodoModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public columnId: string,
    public boardId: string
  ) {
    super(id, name, description, columnId, boardId);
  }

  addColumnId(columnId: string) {
    return new Todo(
      this.id,
      this.name,
      this.description,
      columnId,
      this.boardId
    );
  }

  addBoardId(boardId: string) {
    return new Todo(
      this.id,
      this.name,
      this.description,
      this.columnId,
      boardId
    );
  }
}
