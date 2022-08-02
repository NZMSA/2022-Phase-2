import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DogCard from "./page/cards"
import BREED_LIST from "./const";

function App() {
  
  const [ dogName, setDogName ]= useState("");
  const [list, setList] = useState<String[]>([]);
  
  // const DOG_BASE_URL = "https://dog.ceo/api/breed/hound/images";

  
  function search() {
    list.map((ele) => {
      return (
        axios.get(`https://dog.ceo/api/breed/${ele}/images/random`).then((res) => {
          let obj = res.data;
          console.log("obj",obj.message)
      }));
  })
  }

useEffect(() => {
  setList(BREED_LIST.filter((names) => names.startsWith(dogName)))
}, [dogName]); // Only re-run the effect if count changes

useEffect(() => {
  search()
}, [list]); // Only re-run the effect if count changes

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
        <DogCard imageLink={"https://images.dog.ceo/breeds/boxer/n02108089_13340.jpg"}/>
      </div>
    </div>
  );
}

export default App;

