export class Food {
  name: String;
  category: Number;
  proteins: Number;
  lipids: Number;
  glucids: Number;
  fibers: Number;
  calories: Number;
  unit: Number;
  unitOfMeasure: String | Number;

  constructor(
    name: String,
    proteins: Number,
    lipids: Number,
    glucids: Number,
    fibers: Number,
    unit: Number,
    unitOfMeasure: String | Number
  ) {
    this.name = name;
    this.category = 0;
    this.proteins = proteins;
    this.lipids = lipids;
    this.glucids = glucids;
    this.fibers = fibers;
    this.calories = 0;
    this.unit = unit;
    this.unitOfMeasure = unitOfMeasure;
  }

  calcFoodCaloriesPerUnit() {
    this.calories =
      (this.proteins as any) * 4 +
      (this.lipids as any) * 9 +
      (this.lipids as any) * 4 +
      (this.fibers as any) * 4;
    return this.calories;
  }
}
