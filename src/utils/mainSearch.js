import normalizeString from "./normalizeString.js";

export default class MainSearch {
  constructor(recipes) {
    this.recipes = recipes;
  }

  static filterCards(recipes, userInput) {
    userInput = normalizeString(userInput);
    let filteredRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      const compareName = normalizeString(recipes[i].name).includes(
        normalizeString(userInput)
      );
      const compareDescription = normalizeString(
        recipes[i].description
      ).includes(normalizeString(userInput));

      if (compareName || compareDescription) {
        filteredRecipes.push(recipes[i]);
      } else {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          const compareIngredients = normalizeString(
            recipes[i].ingredients[j].ingredient
          ).includes(userInput);

          if (compareIngredients) {
            filteredRecipes.push(recipes[i]);
          }
        }
      }
    }
    return filteredRecipes;
  }
}
