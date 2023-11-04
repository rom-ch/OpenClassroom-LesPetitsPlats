import normalizeString from "./normalizeString.js";

export default class MainSearch {

  static filterCards(recipes, userInput) {
    let filteredRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      const compareName = normalizeString(recipes[i].name).includes(
        normalizeString(userInput)
      );
      const compareDescription = normalizeString(
        recipes[i].description
      ).includes(normalizeString(userInput));

      if (compareName) {
        filteredRecipes.push(recipes[i]);
        continue;
      } else if (compareDescription) {
        filteredRecipes.push(recipes[i]);
        continue;
      } else {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          const compareIngredients = normalizeString(
            recipes[i].ingredients[j].ingredient
          ).includes(normalizeString(userInput));

          if (compareIngredients) {
            filteredRecipes.push(recipes[i]);
          }
        }
      }
    }
    return filteredRecipes;
  }
}
