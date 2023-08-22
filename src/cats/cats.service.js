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
    return this.cats.find((cat) => cat.id === id);
    // GATOS.find((gato) => gato.id == params.id);
  }

  findIndexById(id) {
    return this.cats.findIndex((cat) => cat.id === id);
  }

  create(cat) {
    this.cats.push(cat);
  }

  deleteByIndex(index) {
    this.cats.splice(index, 1);
    // GATOS.splice(indexGatoEncontrado, 1);
  }

  update(index, cat) {
    this.cats.splice(index, 1, cat);
  }
}
