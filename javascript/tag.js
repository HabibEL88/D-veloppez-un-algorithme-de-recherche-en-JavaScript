import { recipes } from "./recipes.js";
import { search } from "./index.js";

let ingredientList = [];
let ustensilsList = [];
let applianceList = [];

let tagsList = [];

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

const chevron = document.querySelectorAll(".fa-chevron-down"); // Chevrons des boutons
const searchCard = document.querySelectorAll(".search-card"); // Search-cards Ingrédients, Appareil, Ustensiles
const ingredientsInput = document.getElementById("ingredients"); // Input de la search-card "Ingredients"
const applianceInput = document.getElementById("appareil");
const ustensilsInput = document.getElementById("ustensiles");
/*const ingredientContainer = document.getElementById("ingredients-container");*/
const ingredientsUl = document.getElementById("ingredients-ul");
const applianceUl = document.getElementById("appliances-ul");
const ustensilsUl = document.getElementById("ustensils-ul");
const selectedTags = document.getElementById("selectedTags");

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

function clickOnTag(e) {
  let li = e.target;
  let selectedTag = document.createElement("li");
  selectedTag.textContent = li.textContent;
  tagsList.push(li.textContent);
  console.log(tagsList);
  selectedTags.appendChild(selectedTag);
  searchTag();
}

function addTags(elementDOM, tableau) {
  elementDOM.innerHTML = "";
  for (let i = 0; i < tableau.length; i++) {
    let li = document.createElement("li");
    li.textContent = tableau[i];
    li.addEventListener("click", clickOnTag);
    elementDOM.appendChild(li);
  }
}

function searchTag() {
  recipes.forEach((element) => {
    if (tagsList.every((i) => element.appliance.includes(i))) console.log("ok");
    console.log(typeof element.ingredients);
    if (tagsList.every((i) => element.ingredients.includes(i)))
      console.log("ok");
    element.ingredients.forEach((el) => {
      if (tagsList.every((i) => el.ingredient.includes(i)))
        console.log(element);
    });
  });
}
