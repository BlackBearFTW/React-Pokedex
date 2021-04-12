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
                <div>
                    <div className="navbar">
                        <img src={logo} className="logo" alt=""/>
                        <Autocomplete options={pokemonList} limit="10" placeholder="Search Pokémon"
                                      callback={handleAutoComplete}/>
                    </div>
                </div>
                <div className="stats">
                    {pokemonInformation && (
                        <>
                            <div style={{gridColumnStart: "span 2"}}>
                                <div className="pokemon-name">{pokemonInformation.name}</div>
                                <div className="pokemon-id">#{("00" + pokemonInformation.id).slice(-3)}</div>
                            </div>
                            <div>
                                <span className="l-text">{pokemonInformation.stats.hp}</span><br/>HP
                            </div>
                            <div>
                                <span className="l-text">{pokemonInformation.stats.speed}</span><br/>Speed
                            </div>
                            <div>
                                <span className="l-text">{pokemonInformation.stats.attack}</span><br/>Attack
                            </div>
                            <div>
                                <span className="l-text">{pokemonInformation.stats.defense}</span><br/>Defense
                            </div>
                            <div>
                                <span className="l-text">{pokemonInformation.stats.special_attack}</span><br/>Sp. Attack
                            </div>
                            <div>
                                <span className="l-text">{pokemonInformation.stats.special_defense}</span><br/>Sp. Defense
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

}


export default App;
