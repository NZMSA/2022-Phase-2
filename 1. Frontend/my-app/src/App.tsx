/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DogCard from "./pages/Cards"
import BREED_LIST from "./const";
import { Button, Segment, Input } from "semantic-ui-react";

function App() {
  
  const [ dogName, setDogName ]= useState("");
  const [filteredList, setFilteredList] = useState<String[]>([]);
  const [ imageUrlList, setImageUrlList] = useState<String[]>([]);
  
  function random(obj : any){
    return Math.floor(Math.random() * obj.length + 1)
  }
  
async function search() {
  const curDogs: string[] = await Promise.all(filteredList.map(async (ele) => {
    let res:any = await axios.get(`https://dog.ceo/api/breed/${ele}/images`)
    let obj = res.data.message
    return obj[0]
}))
  setImageUrlList(curDogs)
}

async function shuffle() {
  const curDogs: string[] = await Promise.all(filteredList.map(async (ele) => {
    let res:any = await axios.get(`https://dog.ceo/api/breed/${ele}/images`)
    let obj = res.data.message
    return obj[random(obj)]
}))
  setImageUrlList(curDogs)
}

  useEffect(() => {
    if (dogName === "") {
      setFilteredList([])
      setImageUrlList([])
    } else {
      setFilteredList(BREED_LIST.filter((names) => names.startsWith(dogName)))
    }
  }, [dogName]); 

  return (
    <div>
      <h1>🐶 🐶 🐶 Dog Search 🐶 🐶 🐶</h1> 

      <div>
      <Segment inverted>
        <Input
          placeholder="Search Dog Breed"
          type="text"
          id="dog-name"
          name="dog-name"
          onChange={(e) => setDogName(e.target.value)}
        />
       </Segment>
        <br />
        <Button.Group size='large'>
          <Button onClick={search}>Search</Button>
          <Button.Or />
          <Button onClick={shuffle}>Shuffle</Button>
         </Button.Group>
      </div>
      
      {
        filteredList.map( (ele) => {
          return <p>{ele}</p>
        })
      }
      <div className="image">

      {
        imageUrlList.map( (ele, i) => {
          return (
            <div>
              <h1>{filteredList[i]}</h1>
              <DogCard imageLink={ele}/> 
            </div>)
        })
      }
      </div>
    </div>
  );
}

export default App;

