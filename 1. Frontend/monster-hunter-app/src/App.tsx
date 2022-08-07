import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [monsterName, setMonsterName] = useState("");
  const [monsterData, setMonsterData] = useState<undefined | any>(undefined);

  const MONSTER_HUNTER_BASE_URL = "https://mhw-db.com"
  return (
    <div>
      <h1>
        Monster Hunter World: Monster Search
      </h1>
      
      <div>
        <label>Monster Name</label><br/>
        <input
          type="text"
          id="monster-name"
          name="monster-name"
          onChange={e => setMonsterName(e.target.value)}
        />
        <br/>
        <button onClick={search}>Search</button>
      </div>

      <p>
        You have entered {monsterName}
      </p>

      {/* Display Monster Data if it exists */}
      {monsterData === undefined ? (
        <p>Monster not found</p>
      ) : (
        <div id="pokemon-result">
          <p>Description: {monsterData.description}</p>
          <p>Species: {monsterData.species}</p>
        </div>
      )}
    </div>
  );

  // Monster Hunter API calling function
  function search(){
      axios.get(MONSTER_HUNTER_BASE_URL + "/monsters?q={\"name\":\"" + monsterName + "\"}")
      .then((res) => {
        setMonsterData(res.data[0]);
      })
  }
}

export default App;