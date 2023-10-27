import ModelBase from "./ModelBase.type";

export default abstract class Repository<T extends ModelBase> {
  abstract create(model: T): Promise<void>;
  abstract update(model: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<T>;
  abstract findAll(): Promise<T[]>;
}
