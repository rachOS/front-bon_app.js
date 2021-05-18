export class Food {
  id: number;
  label: string;
  category: number;
  proteins: number;
  lipids: number;
  glucids: number;
  fibers: number;
  calories: number;
  quantities: number;
  unitOfMeasure: string;

  constructor(
    id: number = Math.floor(Math.random() * Math.pow(10, 1000)),
    label: string = 'generic food',
    category: number = 0,
    proteins: number = 0.001,
    lipids: number = 0.001,
    glucids: number = 0.001,
    fibers: number = 0.001,
    quantities: number = 100,
    unitOfMeasure: string = 'g'
  ) {
    this.id = id;
    this.label = label;
    this.category = category;
    this.proteins = proteins;
    this.lipids = lipids;
    this.glucids = glucids;
    this.fibers = fibers;
    this.calories = this.calcFoodCalories();
    this.quantities = quantities;
    this.unitOfMeasure = unitOfMeasure;
  }

  private calcFoodCalories() {
    const totalCalories: number =
      this.proteins * 4 + this.lipids * 9 + this.lipids * 4 + this.fibers * 4;
    return totalCalories;
  }
}
