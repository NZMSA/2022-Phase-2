import axios from "axios";
import { useState } from "react";
import "./App.css";
import DogCard from "./page/cards"

function App() {

  const [ dogName, setDogName ]= useState("");

  const DOG_BASE_URL = "https://dog.ceo/api/breed/hound/images";


  function search() {
    axios.get(DOG_BASE_URL).then((res) => {
      let obj = res.data;
      const newArray = Object.keys(obj)
        .map(function(key) {
          return obj[key]
        })
        console.log(newArray[0])
    });
  }

  return (
    <div>
      <h1>Dog Search</h1>

      <div>
        <label>Dog Name</label>
        <br />
        <input
          type="text"
          id="dog-name"
          name="dog-name"
          onChange={(e) => setDogName(e.target.value)}
        />
        <br />
        <button onClick={search}>Search</button>
      </div>

      <p>You have entered {dogName}</p>

      <div id="dog-result">This will show the result</div>
      <div>
        <DogCard />
      </div>
    </div>
  );
}

export default App;

