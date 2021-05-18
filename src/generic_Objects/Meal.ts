import { List } from './genericObjects';

export class Meal extends List {
  label: string;
  constructor(label: string = '') {
    super();
    this.label = label;
  }
}
