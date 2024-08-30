import { useState } from "react";
import axios from "axios";
import "./App.css";
import Gallary from "./Gallary";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => 
        // console.log(response.data.photos.photo));
      setData(response.data.photos.photo))
  };

  return (
    <>
      <center>
        <h1>Image Gallary</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} /> <br />
          <input type="submit" name="search" /> <br />
        </form>
        <br />
        {data.length >= 1 ? <Gallary data={data} /> : <h4>No data Loaded</h4>}
      </center>
    </>
  );
}

export default App;
