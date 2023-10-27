export default class ColumnModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public todosId: string[],
    public boardId: string
  ) {}
}
