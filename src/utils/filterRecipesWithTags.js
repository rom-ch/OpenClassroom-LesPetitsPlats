export default function filterRecipesWithTags(recipes, tags) {
  let filteredRecipes = [];

  recipes.forEach(recipe => {
    tags.forEach(tag => {
      if (recipe.ustensils.includes(tag) || recipe.appliance.includes(tag)) {
        filteredRecipes.push(recipe);
      }
    });
  });
}
