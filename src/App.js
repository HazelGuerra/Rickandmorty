import { BrowserRouter} from "react-router-dom";
import Navbar from "./componets/navbar/index";
import Body from "./componets/body/index";
import Context from "./context/index"
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [characters, setCharacters] = useState ([])
  const globalState = {characters, setCharacters}

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => setCharacters(data.results.map(val => {
      return{...val,favorito:false}
    })))
  },[])

  return (
    <Context.Provider value={globalState}>
    <BrowserRouter>
      <Navbar/>
      <Body/>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;


