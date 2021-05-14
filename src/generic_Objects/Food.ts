export class Food {
  id: Number;
  label: String;
  category: Number;
  proteins: Number;
  lipids: Number;
  glucids: Number;
  fibers: Number;
  calories: Number;
  quantities: Number;
  unitOfMeasure: String | Number;

  constructor(
    id: Number,
    label: String,
    proteins: Number,
    lipids: Number,
    glucids: Number,
    fibers: Number
  ) {
    this.id = id;
    this.label = label;
    this.category = 0;
    this.proteins = proteins;
    this.lipids = lipids;
    this.glucids = glucids;
    this.fibers = fibers;
    this.calories = 0;
    this.quantities = 0;
    this.unitOfMeasure = '';
  }

  calcFoodCaloriesPerQuantities() {
    this.calories =
      (this.proteins as any) * 4 +
      (this.lipids as any) * 9 +
      (this.lipids as any) * 4 +
      (this.fibers as any) * 4;
    return this.calories;
  }
}
