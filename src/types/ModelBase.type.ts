export default class ModelBase {
  protected id: string;
  protected name: string;
  protected description: string;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getDescription() {
    return this.description;
  }
}
