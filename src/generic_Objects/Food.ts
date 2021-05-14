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
  unitOfMeasure: string | number;

  constructor(
    id: number,
    label: string,
    category: number,
    proteins: number,
    lipids: number,
    glucids: number,
    fibers: number,
    quantities: number,
    unitOfMeasure: string
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
