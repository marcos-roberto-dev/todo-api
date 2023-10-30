import ModelBase from "./ModelBase.type";

export default interface Repository<T extends ModelBase> {
  create(model: T): Promise<void>;
  update(model: T): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}
