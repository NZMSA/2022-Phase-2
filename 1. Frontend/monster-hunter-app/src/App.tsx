import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [monsterName, setMonsterName] = useState("");

  const MONSTER_HUNTER_BASE_URL = "https://mhw-db.com"
  return (
    <div>
      <h1>
        Monster Hunter Database: Monster Search
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

      <div id="pokemon-result">Monster data here!</div>
    </div>
  );

  function search(){
      axios.get(MONSTER_HUNTER_BASE_URL + "/monsters?q={\"name\":\"" + monsterName + "\"}")
      .then((res) => {
        console.log(res.data);
      })
  }
}

export default App;