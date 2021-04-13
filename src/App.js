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

    /*eslint-disable*/
    useEffect(() => {
        pokemonService.getAllNames().then(result => setPokemonList(result));
        handleAutoComplete("bulbasaur")
    }, []);
    /*eslint-enable*/


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
                {pokemonInformation && (
                <div className="type-icon-parent">
                    {pokemonInformation.types.map(type => (
                        <img src={`./types/${type}.png`} alt="" className="type-icon" title={type}/>
                    ))}
                </div>
                )}
            </div>
            {/* Right column */}
            <div className="col information-column">
                <div>
                    <div className="navbar">
                        <img src={"./Pokédex_logo.png"} className="logo" alt=""/>
                        <Autocomplete options={pokemonList} limit="10" placeholder="Search Pokémon"
                                      callback={handleAutoComplete}/>
                    </div>
                </div>
                <div className="stats">
                    {pokemonInformation && (
                        <>
                            <div style={{gridColumnStart: "span 2"}}>
                                <div className="pokemon-name">{pokemonInformation.name.replaceAll("-", "‑")}</div>
                                <div className="pokemon-id">#{pokemonInformation.id.toString().padStart(3, '0')}</div>
                            </div>
                            <div>
                                <span>{pokemonInformation.stats.hp}</span>
                                <span>HP</span>
                            </div>
                            <div>
                                <span>{pokemonInformation.stats.speed}</span>
                                <span>Speed</span>
                            </div>
                            <div>
                                <span>{pokemonInformation.stats.attack}</span>
                                <span>Attack</span>
                            </div>
                            <div>
                                <span>{pokemonInformation.stats.defense}</span>
                                <span>Defense</span>
                            </div>
                            <div>
                                <span>{pokemonInformation.stats.special_attack}</span>
                                <span>Sp. Attack</span>
                            </div>
                            <div>
                                <span>{pokemonInformation.stats.special_defense}</span>
                                <span>Sp. Defense</span>
                            </div>
                            <div class="other-stats">
                                Height: {pokemonInformation.height}M Weight: {pokemonInformation.weight}Kg
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

}


export default App;
