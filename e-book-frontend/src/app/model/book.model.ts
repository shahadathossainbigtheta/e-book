export class Book {
  id?:number;
  name?:string;
  price?:number;
  description?:string;


  constructor(id?: number, name?: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
