export default class Recipe {
	contructor(recipe) {
		this.id = recipe.id;
		this.image = recipe.image;
		this.name = recipe.name;
		this.servings = recipe.servings;
		this.ingredients = recipe.ingredients;
		this.time = recipe.time;
		this.description = recipe.description;
		this.appliance = recipe.appliance;
		this.ustensils = recipe.ustensils;
	}
}
