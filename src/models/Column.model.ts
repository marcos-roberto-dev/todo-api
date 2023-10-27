import ModelBase from "../types/ModelBase.type";

export default class ColumnModel extends ModelBase {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public todosId: string[],
    public boardId: string
  ) {
    super();
  }
}
