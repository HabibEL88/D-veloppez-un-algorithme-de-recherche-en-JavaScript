import { recipes } from "./recipes.js";

export function sortByIngredients(recipeDisplayed){
    /* let match = recipes.filter(function(recipeDisplayed) {
        for (let i = 0; i < recipeDisplayed.ingredients.length; i++) {
          if (recipeDisplayed.ingredients[i] === '') {
            return recipeDisplayed;
          }
        }
      }); */

      let ingredients = []

      for (const property of recipeDisplayed)
      {
        console.log(property.ingredients)
        for (const ingredient of property.ingredients) {
            console.log(ingredient.ingredient)
            if(!ingredients.includes(ingredient.ingredient)) {
                console.log('je suis là');
                ingredients.push(ingredient.ingredient)                 
            }
        }
      }
      
/*       console.table(match); // Retourne les 2 dernières lignes
 */}