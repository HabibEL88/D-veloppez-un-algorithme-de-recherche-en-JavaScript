import { recipes } from "./recipes.js";
import { search, getRecipes } from "./index.js";

let ingredientList = [];
let ustensilsList = [];
let applianceList = [];
let selectedIngredients = [];
let selectedUstensils = [];
let selectedAppliances = [];

export function sortByIngredients(recipeDisplayed) {
  let ingredients = [];

  for (const property of recipeDisplayed) {
    for (const prop of property.ingredients) {
      if (!ingredients.includes(prop.ingredient.toLowerCase())) {
        /*evite doublon includes*/
        ingredients.push(prop.ingredient.toLowerCase());
      }
    }
  }
  ingredientList = ingredients;
}

export function sortByAppliances(recipeDisplayed) {
  let appliances = [];

  for (const property of recipeDisplayed) {
    if (!appliances.includes(property.appliance.toLowerCase())) {
      /*evite doublon includes*/
      appliances.push(property.appliance.toLowerCase());
    }
  }
  applianceList = appliances;
}

export function sortByustensils(recipeDisplayed) {
  let ustensils = [];

  for (const property of recipeDisplayed) {
    for (const prop of property.ustensils) {
      if (!ustensils.includes(prop.toLowerCase())) {
        /*evite doublon includes*/
        ustensils.push(prop.toLowerCase());
      }
    }
  }
  ustensilsList = ustensils;
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
chevron[2].addEventListener("click", showUstensilList);

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
  addTags(
    ingredientsUl,
    ingredientList,
    selectedIngredients,
    "ingredients-filter"
  );
}

function showApplianceList() {
  if (searchCard[1].classList.contains("active")) {
    applianceInput.placeholder = `Appareils`;
  } else {
    applianceInput.placeholder = `Rechercher un Appareil`;
  }
  openCard(searchCard[1]);
  addTags(applianceUl, applianceList, selectedAppliances, "appliances-filter");
}

function showUstensilList() {
  if (searchCard[2].classList.contains("active")) {
    ustensilsInput.placeholder = `Ustensiles`;
  } else {
    ustensilsInput.placeholder = `Rechercher un Ustensil`;
  }
  openCard(searchCard[2]);
  addTags(ustensilsUl, ustensilsList, selectedUstensils, "ustensils-filter");
}

function clickOnTag(e, selectedTagList, prop) {
  console.log(prop);
  let li = e.target;
  let selectedTag = document.createElement("div");
  selectedTag.classList.add(prop, "selectedTags");
  let p = document.createElement("p");
  p.innerText = li.textContent;
  selectedTag.appendChild(p);
  let i = document.createElement("i");
  i.classList.add("far", "fa-times-circle", "close-button");
  selectedTag.appendChild(i);
  i.addEventListener("click", (e) => {
    const index = selectedTagList.indexOf(li.textContent);
    if (index > -1) {
      selectedTagList.splice(index, 1);
      selectedTag.remove();
      searchTag();
    }
  });

  selectedTags.appendChild(selectedTag);
  console.log(selectedTagList);
  console.log(selectedIngredients);
  selectedTagList.push(li.textContent);
  searchTag();
}

function addTags(elementDOM, tableau, selectedTagList, prop) {
  elementDOM.innerHTML = "";
  for (let i = 0; i < tableau.length; i++) {
    let li = document.createElement("li");
    li.textContent = tableau[i];
    li.addEventListener("click", (e) => clickOnTag(e, selectedTagList, prop));
    elementDOM.appendChild(li);
  }
}

function searchTag() {
  let filteredRecipes = recipes.filter((element) => {
    let recipeIngredients = element.ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    let recipeUstensils = element.ustensils.map((ing) => ing.toLowerCase());
    return (
      selectedAppliances.every((i) => element.appliance.toLowerCase() == i) &&
      selectedIngredients.every((i) => recipeIngredients.includes(i)) &&
      selectedUstensils.every((i) => recipeUstensils.includes(i))
    );
  });
  getRecipes(filteredRecipes);
}
