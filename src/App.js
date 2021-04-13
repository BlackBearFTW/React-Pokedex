import './App.css';
import {useEffect, useState} from "react";
import Autocomplete from "./components/Autocomplete";
import FastAverageColor from 'fast-average-color';
import PokemonService from "./service/PokemonService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const pokemonService = new PokemonService();

const fac = new FastAverageColor();

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState("");

    /*eslint-disable*/
    useEffect(() => {
        pokemonService.getAllNames().then(result => setPokemonList(result));
        updateScreen("bulbasaur")
    }, []);
    /*eslint-enable*/


    const updateScreen = (pokemon) => {

        if (pokemon < 1 || pokemon > 898) return;


        pokemonService.getPokemonByName(pokemon).then(pokemonInfo => {
            let fallback = false;

            if(pokemonInfo.img === null) {
                pokemonInfo.img = "./fallback.png";
                fallback = true;
            }

            changeBackground(pokemonInfo.img, fallback).then();
            setPokemonInformation(pokemonInfo);

        });
    }

    const changeBackground = async (imgUrl, fallback = false) => {
        const dynamicBackground = document.querySelector(".image-column");
        let color;

        if (fallback) {
            color = "#4a4a4a";
        } else {
            const fullColor = await fac.getColorAsync(imgUrl);
            color = fullColor.hex;
        }

        dynamicBackground.style.backgroundColor = color;
    }

    return (
        <div className="App">
            {/* Left column */}
            <div className="col image-column">
                <div>{/* Placeholder */}</div>
                <div className="img-row">
                    <button className="btn" onClick={() => updateScreen(pokemonInformation.id - 1)} title="Previous">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <img src={pokemonInformation.img} alt=""/>
                    <button className="btn" onClick={() => updateScreen(pokemonInformation.id + 1)} title="Next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
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
                                      callback={updateScreen}/>
                    </div>
                </div>
                <div className="stats">
                    {pokemonInformation && (
                        <>
                            <div style={{gridColumnStart: "span 2"}}>
                                <div className="pokemon-name">
                                    {pokemonInformation.name.replaceAll("-", "‑")}
                                </div>
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
                            <div className="other-stats">
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
