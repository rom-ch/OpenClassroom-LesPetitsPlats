export default class RecipeCard {
  constructor(recipe) {
    this.recipe = recipe;
  }

  loadIngredients(ingredients) {
    let ingredientDiv;
    let ingredientParentDiv;
    ingredientParentDiv = document.createElement("div");
    ingredientParentDiv.classList.add("ingredients-container");

    ingredients.forEach(ing => {
      ingredientDiv = document.createElement("div");
      ingredientDiv.classList.add("ingredient");
      ingredientDiv.innerHTML = `
  		<span class="ingredient__name">${ing.ingredient}</span>
  		<span class="ingredient__value">${ing?.quantity || ''} ${ing?.unit || ''}</span>
  		`;
      ingredientParentDiv.appendChild(ingredientDiv);
    });

    return ingredientParentDiv;
  }

  buildDOM() {
    const ingredients = this.loadIngredients(this.recipe.ingredients);
    const dom = document.createElement("article");
    dom.classList.add("card");
    dom.innerHTML = `
		<div class="card__image">
			<img src="./public/assets/recipes/${this.recipe.image}" alt="${this.recipe.name}" />
		</div>
		<span class="card__duration">${this.recipe.time} mn</span>
		<div class="card__content">
			<h2 class="card__title">${this.recipe.name}</h2>
			<h3 class="card__subtitle">Recette</h3>
			<p>${this.recipe.description}</p>
			<h3 class="card__subtitle">Ingrédients</h3>
		</div>
		`;
    dom.querySelector(".card__content").appendChild(ingredients);

    return dom;
  }
}
