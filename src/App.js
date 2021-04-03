import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Autocomplete from "./components/Autocomplete";




function App() {
   const [pokemon, setPokemon] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState({});
    // const [pokemonImg, setPokemonImg] = useState("");

    async function getInformation(pokemon) {
        if (pokemon === "") {
            //setPokemonImg("");
            return setPokemonInformation("");
        }

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setPokemonInformation(res.data);
        //await getImage(res.data);
    }

    // async function getImage(data) {
    //     setPokemonImg(data.sprites.front_default);
    // }


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
