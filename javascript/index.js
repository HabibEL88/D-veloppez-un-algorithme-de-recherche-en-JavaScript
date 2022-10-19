import { recipes } from "./recipes.js";
import { sortByIngredients, sortByAppliances } from "./tag.js";

// Retournement du chevron des cards au clic
const chevron = document.querySelectorAll(".fa-chevron-down");
for (let i = 0; i < chevron.length; i++) {
  const element = chevron[i];
  element.addEventListener("click", dropdown);
  function dropdown() {
    if (element.style.transform == "rotate(180deg)") {
      element.style.transform = "";
    } else {
      element.style.transform = "rotate(180deg)";
    }
  }
}

// DOM
const recipesContainer = document.getElementById("recipes-container"); // Container des recettes
const searchInput = document.getElementById("search");
/* const chevron = document.querySelectorAll(".fa-chevron-down"); // Chevrons des boutons
 */
// Variables
let recipeArray = []; // Tableau contenant toutes les recettes
let recipeHTMLString = ""; // Contenu de la liste des recettes
let errorResult = document.getElementById("error-result");
let lastResearchQuery = "";
let lastTags = [];
let recipeDisplayed = [];

// FONCTIONS
getRecipes(recipes); // Affichage de toutes les recettes sur la page au chargement

//Affichage des recettes sur la page
function getRecipes(recipesToDisplay) {
  recipeArray = recipesToDisplay.map((recipe) => {
    // Remplit recipeArray avec toutes les données nécessaires
    return {
      html: `
        <div class="recipe-card" data-id="${recipe.id}">
            <div class="recipe-img"></div>
            <div class="recipe-text">
                <div class="recipe-head">
                    <h1>${recipe.name}</h1>
                    <span class="time"><i class="far fa-clock"></i> ${
                      recipe.time
                    } min</span>
                </div>

                <div class="recipe-instructions">
                    <aside>${recipe.ingredients
                      .map(getIngredients)
                      .join(" ")}</aside>
                    <article class="description">${recipe.description.substring(
                      0,
                      200
                    )}${recipe.description.length > 200 ? "..." : ""}</article> 
                </div>
            </div>
        </div>
        `,
    };
  });

  recipeHTMLString = "";
  recipeArray.forEach((element) => {
    recipeHTMLString += element.html; // Insère l'HTML de la recette dans recipeHTMLString
  });
  recipesContainer.innerHTML = recipeHTMLString; // l'HTML de toutes les recettes figure dans recipesContainer
  recipeDisplayed = recipesToDisplay;
  sortByIngredients(recipeDisplayed);
  sortByAppliances(recipeDisplayed);
}

// Affichage chaque ingrédient dans recipe.ingredient
function ingredientConstructor(item) {
  return `${item.ingredient}`;
}

// Affichage des ingrédients dans la card recette
function getIngredients(item) {
  return `<span class="ingredient">${item.ingredient}</span>: ${
    item.quantity || ""
  } ${item.unit || ""} <br>`;
}

function search() {
  let newArray = recipes;
  let sortArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (
      newArray[i].name
        .toLowerCase()
        .includes(lastResearchQuery.toLowerCase()) ||
      newArray[i].description
        .toLowerCase()
        .includes(lastResearchQuery.toLowerCase())
    ) {
      sortArray.push(newArray[i]);
    } else {
      for (let j = 0; j < newArray[i].ingredients.length; j++) {
        if (
          newArray[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(lastResearchQuery.toLowerCase())
        ) {
          sortArray.push(newArray[i]);
          break;
        }
      }
    }
  }
  // Modify UI
  if (sortArray.length == 0) {
    // Display an error when there are no results
    errorResult.innerHTML = `<p class="no-value">« Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.
     </p>`;
  } else {
    errorResult.innerHTML = "";
    // Display in the DOM, the filtered recipes
    getRecipes(sortArray);
  }
}

// Fonction appelée à la saisie de plus ou égal à 3 caractères dans la barre de recherche principale.
// Si le nouveau tableau est égal à 0, alors un message d'erreur s'affiche, s'il ne se passe rien, le tableau ne change pas
function addTag(tag) {
  // ...
}
function searchRecipe(e) {
  if (searchInput.value.length >= 3) {
    recipesContainer.innerHTML = "";
    lastResearchQuery = searchInput.value.toLowerCase();
    search();
  }
}
// Bind the elements of the interface that react to a User event
searchInput.addEventListener("input", (e) => {
  // testInput(e);
  searchRecipe(e);
});
