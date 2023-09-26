import Recipe from "../models/recipe.js";
import { recipes } from "../recipes.js";

export default class RecipeCard {
  constructor(recipes) {
    this.element = this.buildDOM();
    this.recipes = recipes;
  }

  static init() {}

  buildDOM() {
    const dom = document.createElement("article");
    dom.classList.add("card");
    dom.innerHTML = `
		<div class="card__image">
			<img src="./assets/recipes/${this.recipe.image}" alt="${this.recipe.name}" />
		</div>
		<span class="card__duration">${this.recipe.time}</span>
		<div class="card__content">
			<h2 class="card__title">${this.recipe.name}</h2>
			<h3 class="card__subtitle">Recette</h3>
			<p>${this.recipe.description}</p>
			<h3 class="card__subtitle">Ingrédients</h3>
			<div class="ingredients-container">
				<div class="ingredient">
					<span class="ingredient__name">Sucre</span>
					<span class="ingredient__value">1 cuilliere a soupe</span>
				</div>
				<div class="ingredient">
					<span class="ingredient__name">Sucre</span>
					<span class="ingredient__value">1 cuilliere a soupe</span>
				</div>
				<div class="ingredient">
					<span class="ingredient__name">Sucre</span>
					<span class="ingredient__value">1 cuilliere a soupe</span>
				</div>
				<div class="ingredient">
					<span class="ingredient__name">Sucre</span>
					<span class="ingredient__value">1 cuilliere a soupe</span>
				</div>
				<div class="ingredient">
					<span class="ingredient__name">Sucre</span>
					<span class="ingredient__value">1 cuilliere a soupe</span>
				</div>
				<div class="ingredient">
					<span class="ingredient__name">Sucre</span>
					<span class="ingredient__value">1 cuilliere a soupe</span>
				</div>
			</div>
		</div>		
		`;
  }
}
