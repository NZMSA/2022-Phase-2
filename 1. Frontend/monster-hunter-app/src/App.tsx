import { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [monsterName, setMonsterName] = useState("");

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
    </div>
  );

  function search(){
      alert("Search button has been clicked!");
  }
}

export default App;