import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Autocomplete from "./components/Autocomplete";




function App() {
   const [pokemon, setPokemon] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState({});

    function getInformation(pokemon) {
        if (pokemon === "") return setPokemonInformation("");

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
            setPokemonInformation(res.data);
        });
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118').then(res => {
           setPokemon(res.data.results.map(poke => poke.name));
        });
    }, []);

    
  return (
    <div className="App">
        <Autocomplete options={pokemon} limit="10" callback={getInformation}></Autocomplete>
        {/*<img src={JSON.parse(pokemonInformation).sprites.front_default} alt=""/>*/}
        <pre>{pokemonInformation}</pre>
    </div>
  );
}

export default App;
