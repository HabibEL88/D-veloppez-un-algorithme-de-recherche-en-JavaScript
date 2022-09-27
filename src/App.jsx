import { useState, useEffect } from 'react';
import { recipes } from "./data/recipes";
import './styles/style.css';
import { Header } from "./components/Header";


// TODO: structurer la codebase (dossiers, fichiers, composants, etc.)
const Recipe = ({ recipe }) => (
    // TODO: afficher une recette, comme dans la spec
    <div>
        {recipe && recipe.id}
    </div>
)

const App = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const research = (query) => {
    // Code
    console.debug(query);
  }
  useEffect(() => {
    setTimeout(() => {
        setMyRecipes(recipes);
    }, 1000);
  }, []);

  return (
    <div className="App">
        <Header />

        <section>
            <form action="#" method="get" class="form">
                <div class="searchbar">
                    <input type="text" name="search" id="search" placeholder="Rechercher une recette" 
                    onChange={(e) => research(e.target.value)}/>
                    <button type="submit" class="searchbar-button"><i class="fas fa-2x fa-search"></i></button>
                </div>
                <div class="search-list"> 
                    <div class="search-card">
                        <input type="text" name="ingredients" id="ingredients" placeholder="Ingredients" />
                        <button class="search-card-button"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div class="search-card">
                        <input type="text" name="appareil" id="appareil" placeholder="Appareil" />
                        <button class="search-card-button"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div class="search-card">
                        <input type="text" name="ustensiles" id="ustensiles" placeholder="Ustensiles" />
                        <button class="search-card-button"><i class="fas fa-chevron-down"></i></button>
                    </div>
                </div>
            </form>        
        </section>

        <div class="recipes">
        {
            myRecipes.map((recipe) => (
                <Recipe recipe={recipe} />
            ))
        }
        </div>
    </div>
  );
}

export default App;
