import ModelBase from "../types/ModelBase.type";

export default class BoardModel extends ModelBase {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public columnsId: string[]
  ) {
    super();
  }
}
