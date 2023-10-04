import normalizeString from "./normalizeString.js";

export default class MainSearch {
  constructor(recipes) {
    this.recipes = recipes;
  }

  static filterCards(recipes, userInput) {
    userInput = normalizeString(userInput);
    let filteredRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
      if (
        normalizeString(recipes[i].name).includes(normalizeString(userInput)) ||
        normalizeString(recipes[i].description).includes(
          normalizeString(userInput)
        )
      ) {
        filteredRecipes.push(recipes[i]);
      } else {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          if (normalizeString(recipes[i].ingredients[j].ingredient).includes(userInput)) {
            filteredRecipes.push(recipes[i]);
          }
        }
      }
    }
    return filteredRecipes;
  }
}
