import RecipeCard from "../utils/recipeCard.js";
import MainSearch from "../utils/mainSearch.js";
import { recipes } from "../recipes.js";

class App {
  constructor() {
    this.recipeSection = document.querySelector(".recipes-section");
  }

  // Methode pour inserrer les cartes recettes dans le dom
  displayRecipeCards(recipes) {
    this.recipeSection.innerHTML = "";
    recipes.forEach(recipe => {
      const card = new RecipeCard(recipe).buildDOM();
      this.recipeSection.insertAdjacentElement("beforeend", card);
    });
  }

  init() {
    // Dom elements
    const searchInput = document.querySelector("#search");

    // Ajoute toutes les recettes au lancement de la page
    this.displayRecipeCards(recipes);

    // Filtre les recettes
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
