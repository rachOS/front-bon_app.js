/* eslint-disable indent */
/*
*Formule de calcul du métabolisme de base basée sur l'équation de Black(1996)
*et adaptée en fonction de Bouchard et Boulanger(2005)
*Femmes :   \mathrm{MB} = (0,963 * Poid^0,48 * Taille^0,50 * Age^-0,13)*191
*Hommes :   \mathrm{MB} = (1,083 * Poid^0,48 * Taille^0,50 * Age^-0,13)*191
Une fois la formule effectuée, vous la multipliez par 191 et vous obtenez votre
métabolisme de base.
*Sédentaire : MB x 1,4
*Actif: MB x 1,6
*Sportif: MB x 1,7
*/
const basalMetabolicRate = (person) => {
  const formula =
    Math.pow(person.weight, 0.48) *
    Math.pow(person.height, 0.5) *
    Math.pow(person.age, -0.13) *
    191;
  switch (person.sex) {
    case 'M':
      return 1.083 * formula;
    case 'F':
      return 0.963 * formula;
    default:
      break;
  }
};

const dailyEnergyConsuption = (person) => {
  switch (person.id_activity) {
    case 1:
      return basalMetabolicRate(person) * 1.4;
    case 2:
      return basalMetabolicRate(person) * 1.6;
    case 3:
      return basalMetabolicRate(person) * 1.7;
    default:
      break;
  }
};

const bodyGoal = (person) => {
  switch (person.id_goal) {
    case 1:
      return dailyEnergyConsuption(person) - 200;
    case 2:
      return dailyEnergyConsuption(person);
    case 3:
      return dailyEnergyConsuption(person) + 200;
    default:
      break;
  }
};

const calcMacronutrients = (person) => {
  let DEC = dailyEnergyConsuption(person);

  const proteins = person.weight * 1.8;
  const lipids = person.weight * 1;
  DEC = DEC - (lipids * 9 + proteins * 4);
  const glucids = DEC / 4;

  return {
    prot: proteins,
    lip: lipids,
    gluc: glucids,
  };
};

export {
  basalMetabolicRate,
  dailyEnergyConsuption,
  bodyGoal,
  calcMacronutrients,
};
