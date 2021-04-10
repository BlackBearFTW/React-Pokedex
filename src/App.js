import './App.css';
import {useEffect, useState} from "react";
import Autocomplete from "./components/Autocomplete";
import FastAverageColor from 'fast-average-color';
import PokemonService from "./service/PokemonService";
import logo from "./Pokédex_logo.png";

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
            changeBackground(pokemonInfo.img).then();
        });

    }

    const changeBackground = async (imgUrl) => {
        const dynamicBackground = document.querySelector(".image-column");
        const color = await fac.getColorAsync(imgUrl);
        dynamicBackground.style.backgroundColor = color.hex;
    }

    return (
             <div className="App">
                 {/* Left column */}
                 <div className="col image-column">
                     <div>{/* Placeholder */}</div>
                     <img src={pokemonInformation.img} alt=""/>
                     <div className="type-icon-parent">
                         <div className="type-icon">Icon</div>
                         <div className="type-icon">Icon</div>
                     </div>
                 </div>
                 {/* Right column */}
                 <div className="col information-column">
                     <div className="navbar">
                         <img src={logo} className="logo" alt=""/>
                         <Autocomplete options={pokemonList} limit="10" placeholder="Search Pokémon" callback={handleAutoComplete}/>
                     </div>
                     <div></div>
                     <div>{/* Placeholder */}</div>
                 </div>
             </div>
    );

}


export default App;
