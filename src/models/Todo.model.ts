export default class TodoModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public columnId: string,
    public boardId: string
  ) {}
}
