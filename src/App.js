import logo from './logo.svg';
// import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
    <header>
        <img src="assets/logo.png" alt="Logo Les petits plats">
    </header>

    <section>
        <form action="#" method="get" class="form">
            <div class="searchbar">
                <input type="text" name="search" id="search" placeholder="Rechercher une recette">
                <button type="submit" class="searchbar-button"><i class="fas fa-2x fa-search"></i></button>
            </div>
            <div class="search-list">
                <div class="search-card">
                    <input type="text" name="ingredients" id="ingredients" placeholder="Ingredients">
                    <button class="search-card-button"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="search-card">
                    <input type="text" name="appareil" id="appareil" placeholder="Appareil">
                    <button class="search-card-button"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="search-card">
                    <input type="text" name="ustensiles" id="ustensiles" placeholder="Ustensiles">
                    <button class="search-card-button"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>
        </form>        
    </section>

    <div class="recipes">

    </div>
    </div>
  );
}

export default App;
