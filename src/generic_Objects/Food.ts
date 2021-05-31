export class Food {
  label: string;
  proteins: number;
  lipids: number;
  glucids: number;
  calories: number;
  quantities: number;
  unitOfMeasure: string;
  category?: string;
  fibers?: number;

  constructor(
    label: string = 'generic food',
    proteins: number = 0,
    lipids: number = 0,
    glucids: number = 0,
    quantities: number = 100,
    unitOfMeasure: string = 'g',
    category: string = 'default category',
    fiber: number = 0
  ) {
    this.label = label;
    this.proteins = proteins;
    this.lipids = lipids;
    this.glucids = glucids;
    this.quantities = this.convertQuantitiesToExpectedUnit(quantities);
    this.calories = this.calcFoodCalories();
    this.unitOfMeasure = unitOfMeasure;
    this.category = category;
    this.fibers = fiber;
  }

  private calcFoodCalories() {
    const totalCalories: number =
      this.proteins * 4 +
      this.lipids * 9 +
      this.glucids * 4 +
      (this.fibers || 0) * 2;
    return totalCalories;
  }

  private convertQuantitiesToExpectedUnit(quantities: number) {
    return quantities === 1 || quantities === 100 ? quantities : 100;
  }
}
