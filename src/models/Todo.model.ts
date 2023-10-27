import ModelBase from "../types/ModelBase.type";

export default class Todo extends ModelBase {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public columnId: string,
    public boardId: string
  ) {
    super();
  }
}
