export default class BoardModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public columnsId: string[]
  ) {}
}
