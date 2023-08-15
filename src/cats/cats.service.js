import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor() {
    this.cats = [];
  }

  findAll() {
    return this.cats;
  }

  findById(id) {
    return this.cats.find((cat) => cat.id == id);
    // GATOS.find((gato) => gato.id == params.id);
  }

  create(cat) {
    this.cats.push(cat);
  }
}
