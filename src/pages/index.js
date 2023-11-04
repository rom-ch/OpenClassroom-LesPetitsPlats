import RecipeCard from "../utils/recipeCard.js";
import MainSearch from "../utils/mainSearchNativeLoops.js";
import Dropdown from "../utils/dropdown.js";
import Tag from "../utils/tag.js";

import { recipes } from "../recipes.js";
import MainSearchArrMethods from "../utils/mainSearchArrMethods.js";

class App {
  constructor() {
    this.recipeSection = document.querySelector(".recipes-section");
  }

  // Recuperer les ingredients de chaque recette
  getIngredients(recipes) {
    let ingredientList = [];
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        ingredientList.push(ing.ingredient);
      });
    });
    ingredientList = [...new Set(ingredientList)];
    return ingredientList;
  }

  // Recuperer les appareils de chaque recette
  getAppliances(recipes) {
    let applianceList = [];
    recipes.forEach(recipe => {
      applianceList.push(recipe.appliance);
    });
    applianceList = [...new Set(applianceList)];
    return applianceList;
  }

  // Recuperer les ustensiles de chaque recette
  getUstensils(recipes) {
    let ustensilsList = [];
    recipes.forEach(recipe => {
      ustensilsList.push(recipe.ustensils);
    });
    ustensilsList = [...new Set(ustensilsList.flat())];
    return ustensilsList;
  }

  // Methode pour inserrer les cartes recettes dans le dom
  displayRecipeCards(recipes, userInput) {
    this.recipeSection.innerHTML = "";
    recipes.forEach(recipe => {
      const card = new RecipeCard(recipe).buildDOM();
      this.recipeSection.insertAdjacentElement("beforeend", card);
    });
    if (recipes.length === 0) {
      this.recipeSection.innerHTML = `Aucune recette ne contient '${userInput}' vous pouvez chercher «
      tarte aux pommes », « poisson », etc.`;
    }
  }

  init() {
    // Dom elements
    const searchInput = document.querySelector("#search");

    // Ajoute toutes les recettes au lancement de la page
    this.displayRecipeCards(recipes);

    // Filtre les recettes
    searchInput.addEventListener("input", e => {
      if (e.target.value.length >= 3) {
        let filteredRecipes = MainSearchArrMethods.filterCards(
          recipes,
          e.target.value
        );
        this.displayRecipeCards(filteredRecipes, e.target.value);
        ingredientsDropdown.init(this.getIngredients(filteredRecipes));
        applianceDropdown.init(this.getAppliances(filteredRecipes));
        ustensilsDropdown.init(this.getUstensils(filteredRecipes));
      } else {
        this.displayRecipeCards(recipes);
        ingredientsDropdown.init(this.getIngredients(recipes));
        applianceDropdown.init(this.getAppliances(recipes));
        ustensilsDropdown.init(this.getUstensils(recipes));
      }
    });

    // Ingredients dropdown
    const ingredientsDropdown = new Dropdown("Ingrédients");
    ingredientsDropdown.init(this.getIngredients(recipes));
    // Appliance dropdown
    const applianceDropdown = new Dropdown("Appareils");
    applianceDropdown.init(this.getAppliances(recipes));
    // Ustensils dropdown
    const ustensilsDropdown = new Dropdown("Ustensiles");
    ustensilsDropdown.init(this.getUstensils(recipes));

    const links = document.querySelectorAll(".list li a");
    // let filteredRecipes;
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        new Tag(link.innerHTML);
      });
    });
  }
}

const app = new App();
app.init();
