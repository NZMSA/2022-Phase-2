import React, {useState} from "react";
import axios from "axios";

function DogCard () {
    const [image, setImage] = useState("");
    const DOG_BASE_URL = ""

    function getImage () {
        axios.get(DOG_BASE_URL).then((res) => {
            setImage(res.data);
        })
    };

    return (
        <div>
            <img src={image} alt=""></img>
            <button onClick={getImage}>Show Image</button>
        </div>
    );
}

export default DogCard;