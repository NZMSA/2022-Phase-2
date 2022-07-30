import axios from "axios";
import { useState } from "react";
import "./App.css";
import heroCard from "./page/hero"



function App() {

  const [ heroName, setHeroName ]= useState("");
  const HERO_BASE_URL = "https://akabab.github.io/superhero-api/api";

  function search() {
    axios.get(HERO_BASE_URL + "/all.json").then((res) => {
      console.log(res.data[heroName]);
      var obj = res.data;
      var found = obj.find(
        function(item:any) {
          return item.name === heroName
        }
      )
      console.log(found)
    });
  }

  return (
    <div>
      <h1>Superhero Search</h1>

      <div>
        <label>Superhero Name</label>
        <br />
        <input
          type="text"
          id="hero-name"
          name="hero-name"
          onChange={(e) => setHeroName(e.target.value)}
        />
        <br />
        <button onClick={search}>Search</button>
      </div>

      <p>You have entered {heroName}</p>

      <div id="hero-result">This will show the result</div>
    </div>
  );
}

export default App;

