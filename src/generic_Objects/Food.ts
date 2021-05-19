import { number } from 'prop-types';

export class Food {
  label: string;
  category: string;
  proteins: number;
  lipids: number;
  glucids: number;
  calories: number;
  fibers?: number;
  quantities: number;

  constructor(
    //    id: number = Math.floor(Math.random() * Math.pow(10, 1000)),
    label: string = 'generic food',
    category: string = 'default category',
    proteins: number = 0,
    lipids: number = 0,
    glucids: number = 0,
    fiber: number = 0,
    quantities: number = 1
  ) {
    this.label = label;
    this.category = category;
    this.proteins = proteins;
    this.lipids = lipids;
    this.glucids = glucids;
    this.fibers = fiber;
    this.quantities = this.convertQuantitiesToOneUnit(quantities);
    this.calories = this.calcFoodCalories();
  }

  private calcFoodCalories() {
    const totalCalories: number =
      this.proteins * 4 +
      this.lipids * 9 +
      this.glucids * 4 +
      (this.fibers || 0) * 2;
    return totalCalories;
  }

  private convertQuantitiesToOneUnit(quantities: number) {
    return quantities / quantities;
  }
}
