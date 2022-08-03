/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DogCard from "./page/cards"
import BREED_LIST from "./const";

function App() {
  
  const [ dogName, setDogName ]= useState("");
  const [list, setList] = useState<String[]>([]);
  const [image, setImage] = useState([]);
  
  // const DOG_BASE_URL = "https://dog.ceo/api/breed/hound/images";
  function random(obj : any){
    return Math.floor(Math.random() * obj.length + 1)
  }
  
  function search() {
    list.map((ele) => {
      return (
        axios.get(`https://dog.ceo/api/breed/${ele}/images`).then((res) => {
          let obj = res.data.message;
          console.log("dog",obj[0])
          setImage(obj[random(obj)])
      }));
    })
  }

  useEffect(() => {
    setList(BREED_LIST.filter((names) => names.startsWith(dogName)))
  }, [dogName]); // Only re-run the effect if count changes

  return (
    <div>
      <h1>Dog Search</h1>

      <div>
        <input
          type="text"
          id="dog-name"
          name="dog-name"
          onChange={(e) => setDogName(e.target.value)}
        />
        <br />
        <button onClick={search}>Search</button>
      </div>

      <div>
       <DogCard imageLink={image}/> 
      </div>
    </div>
  );
}

export default App;

