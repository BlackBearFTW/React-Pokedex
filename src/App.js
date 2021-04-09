import './App.css';
import {useEffect, useState} from "react";
import Autocomplete from "./components/Autocomplete";
import FastAverageColor from 'fast-average-color';
import PokemonService from "./service/PokemonService";

const pokemonService = new PokemonService();

const fac = new FastAverageColor();

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState("");

    useEffect(() => {
        pokemonService.getAllNames().then(result => setPokemonList(result));
    }, []);

    const handleAutocomplete = (pokemon) => {
        pokemonService.getPokemonByName(pokemon).then(pokemonInfo => setPokemonInformation(pokemonInfo));
        changeBackground("#poke-img");
    }

    const changeBackground = (imgSelector) => {
        const app = document.querySelector(".App");
        const color = fac.getColor(document.querySelector(imgSelector));
        app.style.backgroundColor = color.hex;
    }

    return (
        <div className="App">
            <div className="col left-col">
                <img src={pokemonInformation.img} id="pokemon-img" alt="" crossOrigin="anonymous"/>
            </div>
            <div className="col right-col">
                <Autocomplete options={pokemonList} limit="10" callback={handleAutocomplete}/>
            </div>
        </div>
    );

}


export default App;
