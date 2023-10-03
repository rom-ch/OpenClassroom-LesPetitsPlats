import RecipeCard from "../utils/recipeCard.js";
import MainSearch from "../utils/mainSearch.js";
import { recipes } from "../recipes.js";

class App {
  constructor() {
    this.recipeSection = document.querySelector(".recipes-section");
  }

  displayRecipeCards(recipes) {
    this.recipeSection.innerHTML = "";
    recipes.forEach(recipe => {
      const card = new RecipeCard(recipe).buildDOM();
      this.recipeSection.insertAdjacentElement("beforeend", card);
    });
  }

  init() {
    // const recipeSection = document.querySelector(".recipes-section");
    const searchInput = document.querySelector("#search");

    this.displayRecipeCards(recipes);

    searchInput.addEventListener("input", e => {
      if (e.target.value.length >= 3) {
        let filteredRecipes = MainSearch.filterCards(recipes, e.target.value);
        this.displayRecipeCards(filteredRecipes);
      } else {
        this.displayRecipeCards(recipes);
      }
    });
  }
}

const app = new App();
app.init();
