import { Injectable } from '@angular/core';

class Lista {
  title!: string;
}

@Injectable()
export class ListaService {
  private lists: Lista[] = [];

  constructor() {}

  add(title: string) {
    this.lists.push({ title });
  }

  remove(index: number) {
    this.lists.splice(index, 1);
  }

  getList() {
    return this.lists;
  }
}