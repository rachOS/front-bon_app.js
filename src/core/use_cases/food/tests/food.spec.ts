import { banana, genericFood } from '../foods';
import { categories } from '../misc/categories';
import { unitsOfMeasure } from '../misc/unitsOfMeasure';
import { Food } from '../../../../generic_Objects/genericObjects';

describe('Food', () => {
  describe('create a new food', () => {
    it('must be a real food', () => {
      expect(banana && genericFood).toBeInstanceOf(Food);
    });

    describe('label', () => {
      it('must be a string', () => {
        expect(typeof banana.label && typeof genericFood.label).toBe('string');

        expect(banana.label && genericFood.label).toEqual(
          expect.stringMatching(/[a-z]\D/)
        );

        expect(banana).toHaveProperty('label', 'banana');
      });

      it('must have a default label', () => {
        expect(genericFood.label).toBe('generic food');

        expect(genericFood.label).not.toBe('');
      });

      it('must have a label', () => {
        expect(
          banana.label.length && genericFood.label.length
        ).toBeGreaterThanOrEqual(1);
      });
    });

    describe('category', () => {
      it('must be a valid character', () => {
        expect(typeof banana.category && typeof genericFood.category).toBe(
          'string'
        );

        expect(banana.category && genericFood.category).toEqual(
          expect.stringMatching(/[a-z]\D/)
        );
      });

      it('must have a default category', () => {
        expect(genericFood.category).toBe('default category');

        expect(genericFood.category).not.toBe('');
      });

      it('must have a category', () => {
        expect(banana.category && genericFood.category).toBeTruthy();
      });

      it('must have a valid category', () => {
        expect(genericFood.category).toEqual(
          expect.stringMatching('default category')
        );
        expect(banana.category).toEqual(expect.stringMatching('fruits'));

        expect(categories).toContain(banana.category && genericFood.category);

        expect(categories).not.toContain((banana.category = 'test'));
      });
    });

    describe('Macronutrient', () => {
      describe('proteins', () => {
        it('must be a number', () => {
          expect(typeof banana.proteins && typeof genericFood.proteins).toBe(
            'number'
          );
        });

        it('must have a quantity of proteins by default', () => {
          expect(genericFood.proteins).toEqual(0);
        });

        it('must have a quantity of proteins', () => {
          expect(banana.proteins).toBeGreaterThan(0);
        });
      });

      describe('lipids', () => {
        it('must be a number', () => {
          expect(typeof banana.lipids && typeof genericFood.lipids).toBe(
            'number'
          );
        });

        it('must have a quantity of lipids by default', () => {
          expect(genericFood.lipids).toEqual(0);
        });

        it('must have a quantity of lipids', () => {
          expect(banana.lipids).toBeGreaterThan(0);
        });
      });

      describe('glucids', () => {
        it('must be a number', () => {
          expect(typeof banana.glucids && typeof genericFood.glucids).toBe(
            'number'
          );
        });

        it('must have a quantity of glucids by default', () => {
          expect(genericFood.glucids).toEqual(0);
        });

        it('must have a quantity of glucids', () => {
          expect(banana.glucids).toBeGreaterThan(0);
        });
      });

      describe('fibers', () => {
        it('must be a number', () => {
          expect(typeof genericFood.fibers).toBe('number');
        });

        it('must have a quantity of fibers by default', () => {
          expect(genericFood.fibers).toEqual(0);
        });
      });

      describe('calories', () => {
        it('must be a number', () => {
          expect(typeof genericFood.calories && typeof banana.calories).toBe(
            'number'
          );
        });
        it('convert the macronutriement quantities in calories', () => {
          const convertMacroNutriementsToCals: Function = (food: Food) => {
            return (
              food.proteins * 4 +
              food.lipids * 9 +
              food.glucids * 4 +
              food.fibers * 2
            );
          };

          expect(genericFood.calories).toEqual(0);
          expect(genericFood.calories && banana.calories).toEqual(
            convertMacroNutriementsToCals(genericFood || banana)
          );
        });
      });
    });

    describe('quantities', () => {
      it('must be a number', () => {
        expect(typeof genericFood.quantities && typeof banana.quantities).toBe(
          'number'
        );
      });
      it('must have a default value equal to 100', () => {
        expect(genericFood.quantities).toEqual(100);
      });

      it('must have a value equal to 1 or 100', () => {
        expect.extend({
          verifyQuantities(foodQuantities: number) {
            if (foodQuantities === 1 || foodQuantities === 100) {
              return {
                message: () => `${foodQuantities} is a valid quantity`,
                pass: true,
              };
            } else {
              return {
                message: () =>
                  `${foodQuantities} is not a valid quantity. It must be equal to 1 or 100`,
                pass: false,
              };
            }
          },
        });
        expect(banana.quantities).verifyQuantities(1);
      });
    });

    describe('units of measure', () => {
      it('must be a valid character', () => {
        expect(
          typeof banana.unitOfMeasure && typeof genericFood.unitOfMeasure
        ).toBe('string');

        expect(banana.unitOfMeasure && genericFood.unitOfMeasure).toEqual(
          expect.stringMatching(/[a-z]/)
        );
      });

      it('must have a unit of measure', () => {
        expect(banana.unitOfMeasure && genericFood.unitOfMeasure).toBeTruthy();
      });

      it('must have a valid unit of measure', () => {
        expect(genericFood.unitOfMeasure).toEqual(expect.stringMatching('g'));
        expect(banana.unitOfMeasure).toEqual(expect.stringMatching('unit'));

        expect(unitsOfMeasure).toContain(
          banana.unitOfMeasure && genericFood.unitOfMeasure
        );

        expect(categories).not.toContain((banana.unitOfMeasure = 'test'));
      });
    });
  });
});
