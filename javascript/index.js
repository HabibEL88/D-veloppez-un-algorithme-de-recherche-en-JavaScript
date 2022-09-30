import { recipes } from "./recipes.js";
// Retournement du chevron des cards au clic
const chevron = document.querySelectorAll(".fa-chevron-down");
for (let i = 0; i < chevron.length; i++) {
    const element = chevron[i];
    element.addEventListener("click", dropdown)
    function dropdown() {
        if (element.style.transform == "rotate(180deg)") {
            element.style.transform = "";
        } else {
            element.style.transform = "rotate(180deg)";
        }
    }
}
/*function startResearch() {
    // ...

    search2(query, filters);
}

function search1() {}
function search2() {}

function showRecipes() {
    const container = document.getElementById("recipes");
    // recipes.forEach(recipe => {
    //     console.debug(recipe.id);
    // });

    // lotsOfRecipes.forEach(recipe => {
    //     console.debug(recipe.id);
    // });
}

showRecipes();*/


// DOM
const recipesContainer = document.getElementById("recipes-container"); // Container des recettes

// Variables
let recipeArray = []; // Tableau contenant toutes les recettes
let recipeHTMLString = ""; // Contenu de la liste des recettes


// FONCTIONS 

getRecipes(recipes); // Affichage des recettes sur la page


//Affichage des recettes sur la page
function getRecipes(recipes) {
  recipeArray = recipes.map((recipe) => {
    // Remplit recipeArray avec toutes les données nécessaires
    return {
      html: `
        <div class="recipe-card" data-id="${recipe.id}">
            <div class="recipe-img"></div>
            <div class="recipe-text">
                <div class="recipe-head">
                    <h1>${recipe.name}</h1>
                    <span class="time"><i class="far fa-clock"></i> ${recipe.time} min</span>
                </div>
                
                <div class="recipe-instructions">
                    <aside>${recipe.ingredients.map(getIngredients).join(" ")}</aside>
                    <article class="description">${recipe.description.substring(0,200 )}${recipe.description.length > 200 ? "..." : ""}</article> 
                </div>
            </div>
        </div>
        `,
    };
  });
  recipeArray.forEach((element) => {
    recipeHTMLString += element.html; // Insère l'HTML de la recette dans recipeHTMLString
  });
  recipesContainer.innerHTML = recipeHTMLString; // l'HTML de toutes les recettes figure dans recipesContainer
}
// Affichage chaque ingrédient dans recipe.ingredient
function ingredientConstructor(item) {
    return `${item.ingredient}`;
  }
  
  // Affichage des ingrédients dans la card recette
  function getIngredients(item) {
    return `<span class="ingredient">${item.ingredient}</span>: ${item.quantity || ""} ${item.unit || ""} <br>`;
  }