// Extend a class BoardModel to class Board
// this class will be has a method:
// - return a new instance of Board
// - new Board(id, name, description, columnsId)
// - this method add a new columnId to columnsId

import BoardModel from "../models/Board.model";

export default class Board extends BoardModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public columnsId: string[]
  ) {
    super(id, name, description, columnsId);
  }

  addColumnId(columnId: string) {
    return new Board(this.id, this.name, this.description, [
      ...this.columnsId,
      columnId,
    ]);
  }
}
