import normalizeString from "./normalizeString.js";

export default class MainSearchArrMethods {
  static filterCards(recipes, userInput) {
    const filteredRecipes = recipes.filter(recipe => {
      const compareIngredients = recipe.ingredients.some(ing => {
        const checkIngredient = normalizeString(ing.ingredient).includes(
          normalizeString(userInput)
        );
        if (checkIngredient) return recipe;
      });

      return (
        normalizeString(recipe.name).includes(normalizeString(userInput)) ||
        normalizeString(recipe.description).includes(
          normalizeString(userInput)
        ) ||
        compareIngredients
      );
    });

    return filteredRecipes;
  }
}
