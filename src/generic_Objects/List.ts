export class List {
  dataStore: [];
  position: number;
  listSize: number;

  constructor() {
    this.dataStore = [];
    this.position = 0;
    this.listSize = 0;
  }

  add(elements: {} | []) {
    Array.isArray(elements)
      ? elements.map((el) => ((this.dataStore as any)[this.listSize++] = el))
      : ((this.dataStore as any)[this.listSize++] = elements);

    return this.dataStore;
  }

  clear() {
    this.dataStore = [];
    this.listSize = 0;
  }

  find(element: string | number) {
    return (this.dataStore as any).filter(
      (el: any) => el.label.includes(element) || el.id === element
    );
  }
}
