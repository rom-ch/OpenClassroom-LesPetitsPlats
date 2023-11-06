export default function filterRecipesWithTags(recipes, tag) {
  let filteredRecipes = [];

  const compareIng = (recipe, tag) => {
    recipe.ingredients.forEach(ing => {
      if (ing.ingredient.includes(tag)) {
        filteredRecipes.push(recipe);
      }
    });
  };

  recipes.forEach(recipe => {
    if (recipe.appliance.includes(tag) || recipe.ustensils.includes(tag)) {
      filteredRecipes.push(recipe);
    }
    compareIng(recipe, tag);
  });
  return filteredRecipes;
}
