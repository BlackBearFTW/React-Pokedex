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

    const handleAutoComplete = (pokemon) => {
        pokemonService.getPokemonByName(pokemon).then(pokemonInfo => {
            setPokemonInformation(pokemonInfo);
            changeBackground(pokemonInfo.img);
        });

    }

    const changeBackground = async (imgUrl) => {
        const app = document.querySelector(".App");
        const color = await fac.getColorAsync(imgUrl);
        app.style.backgroundColor = color.hex;
    }

    return (
        <div className="App">
            <div className="col left-col">
                <img src={pokemonInformation.img} id="pokemon-img" alt="" crossOrigin=""/>
            </div>
            <div className="col right-col">
                <Autocomplete options={pokemonList} limit="10" callback={handleAutoComplete}/>
            </div>
        </div>
    );

}


export default App;
