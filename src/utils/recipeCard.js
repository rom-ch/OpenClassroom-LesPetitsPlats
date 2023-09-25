import { recipes } from "../recipes.js";

export default class RecipeCard {
	static init() {
		recipes.forEach(recipe => {
			new RecipeCard(recipe);
		});
	}
}
