import { List } from './genericObjects';
export class Recipe extends List {
  label: string;
  constructor(label: string = '') {
    super();
    this.label = label;
  }
}
