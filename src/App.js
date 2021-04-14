import './App.css';
import {useEffect, useState} from "react";
import FastAverageColor from 'fast-average-color';
import PokemonService from "./service/PokemonService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PokemonInformation from "./components/PokemonInformation";
import Navbar from "./components/Navbar";

const pokemonService = new PokemonService();

const fac = new FastAverageColor();

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState(null);

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
                    <button className="btn" onClick={() => updateScreen(pokemonInformation?.id - 1)} title="Previous">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <img src={pokemonInformation?.img} className="pokemon-img" alt=""/>
                    <button className="btn" onClick={() => updateScreen(pokemonInformation?.id + 1)} title="Next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                {pokemonInformation && (
                <div className="type-icon-parent">
                    {pokemonInformation?.types.map(type => (
                        <img src={`${process.env.PUBLIC_URL}/types/${type}.png`} alt="" className="type-icon" title={type}/>
                    ))}
                </div>
                )}
            </div>
            {/* Right column */}
            <div className="col information-column">
                <Navbar data={pokemonList} callback={updateScreen} />
                { pokemonInformation && <PokemonInformation data={pokemonInformation} />}
            </div>
        </div>
    );

}


export default App;
