import { recipes } from "../data/recipes.js";
import MainSearch from "../utils/mainSearch.js";
import RecipeCard from "../components/recipeCard.js";
import Dropdown from "../components/dropdown.js";
import Tag from "../components/tag.js";

import filterRecipesWithTags from "../utils/filterRecipesWithTags.js";

class App {
  constructor() {
    this.recipeSection = document.querySelector(".recipes-section");
    this.recipes = recipes;
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
    document.querySelector(
      ".total-recipes"
    ).innerHTML = `${recipes.length} recettes`;

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
    this.displayRecipeCards(this.recipes);

    // Filtre les recettes
    searchInput.addEventListener("input", e => {
      if (e.target.value.length >= 3) {
        this.recipes = MainSearch.filterCards(this.recipes, e.target.value);
        this.displayRecipeCards(this.recipes, e.target.value);
        ingredientsDropdown.init(this.getIngredients(this.recipes));
        applianceDropdown.init(this.getAppliances(this.recipes));
        ustensilsDropdown.init(this.getUstensils(this.recipes));
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

    // Tags
    const links = document.querySelectorAll(".list li a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        new Tag(link.innerHTML);
        this.recipes = filterRecipesWithTags(this.recipes, link.innerHTML);
        this.displayRecipeCards(this.recipes, "error");
      });
    });

    // RecipeNumber
    // new RecipeNumber(this.recipes.length);
  }
}

const app = new App();
app.init();
