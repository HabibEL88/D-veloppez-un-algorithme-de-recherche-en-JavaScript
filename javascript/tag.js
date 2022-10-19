import { recipes } from "./recipes.js";

let ingredientList = [];
let usentilsList = [];
let applianceList = [];

export function sortByIngredients(recipeDisplayed) {
  let ingredients = [];

  for (const property of recipeDisplayed) {
    for (const prop of property.ingredients) {
      if (!ingredients.includes(prop.ingredient)) {
        /*evite doublon includes*/
        ingredients.push(prop.ingredient);
      }
    }
  }
  return (ingredientList = ingredients);
}

export function sortByAppliances(recipeDisplayed) {
  let appliances = [];

  for (const property of recipeDisplayed) {
    if (!appliances.includes(property.appliance)) {
      /*evite doublon includes*/
      appliances.push(property.appliance);
    }
  }
  return (applianceList = appliances);
}
export function sortByUstensils(recipeDisplayed) {
  let ustensils = [];

  for (const property of recipeDisplayed) {
    for (const prop of property.ustensils) {
      if (!ustensils.includes(prop.ingredient)) {
        /*evite doublon includes*/
        ustensils.push(prop.ingredient);
      }
    }
  }
  return (ingredientList = ingredients);
}
ustensils;
const chevron = document.querySelectorAll(".fa-chevron-down"); // Chevrons des boutons
const searchCard = document.querySelectorAll(".search-card"); // Search-cards Ingrédients, Appareil, Ustensiles
const ingredientsInput = document.getElementById("ingredients"); // Input de la search-card "Ingredients"
const applianceInput = document.getElementById("appareil");
const ustensilsInput = document.getElementById("ustensiles");
/*const ingredientContainer = document.getElementById("ingredients-container");*/
const ingredientsUl = document.getElementById("ingredients-ul");
const applianceUl = document.getElementById("appliances-ul");
const ustensilsUl = document.getElementById("ustensils-ul");

chevron[0].addEventListener("click", showIngredientsList); // Affichage des ingrédients au clic sur le bouton
chevron[1].addEventListener("click", showApplianceList); // Affichage des Appareils au clic sur le bouton
/* chevron[0].addEventListener("click", showIngredientsList); // Affichage des ingrédients au clic sur le bouton
 */ // Ouverture de la searchCard
function openCard(searchCard) {
  searchCard.classList.toggle("active");
}

function showIngredientsList() {
  if (searchCard[0].classList.contains("active")) {
    ingredientsInput.placeholder = `Ingrédients`;
  } else {
    ingredientsInput.placeholder = `Rechercher un ingrédient`;
  }
  openCard(searchCard[0]);
  addTags(ingredientsUl, ingredientList);
}

function showApplianceList() {
  if (searchCard[1].classList.contains("active")) {
    applianceInput.placeholder = `Appareils`;
  } else {
    applianceInput.placeholder = `Rechercher un Appareil`;
  }
  openCard(searchCard[1]);
  addTags(applianceUl, applianceList);
}

function addTags(elementDOM, tableau) {
  console.log(elementDOM);
  let listCard = "";
  for (let i = 0; i < tableau.length; i++) {
    listCard += ` 
    <li>${tableau[i]}</li>
    `;
  }
  elementDOM.innerHTML = listCard;
}
