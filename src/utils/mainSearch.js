import normalizeString from "./normalizeString.js";

export default class MainSearch {
  constructor(recipes) {
    this.recipes = recipes;
  }

  static filterCards(recipes, userInput) {
    let filteredRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
      if (
        normalizeString(recipes[i].name).includes(normalizeString(userInput)) ||
        normalizeString(recipes[i].description).includes(
          normalizeString(userInput)
        )
        // recipes[i].name.includes(userInput) ||
        // recipes[i].ingredients.includes(userInput) ||
        // recipes[i].description.includes(userInput)
      ) {
        filteredRecipes.push(recipes[i]);
      }
    }
    return filteredRecipes;
  }
}
