import React, {useState} from 'react';
import './App.css';

function App() {

  const [pokemonName, setPokemonName] = useState("");

  function search() {
    alert("Search button has been clicked!");
}

  return (
    <div>
        <h1>Pokemon Search</h1>
        <div>
          <label>Pokemon Name</label><br/>
          <input type="text" id="pokemon-name" name="pokemon-name" onChange={e => setPokemonName(e.target.value)}/><br/>
          <button onClick={search}>
            Search
          </button>
        </div>
        <p>
        You have entered {pokemonName}
        </p>
    </div>
  );
}

export default App;

