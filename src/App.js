import './App.css';
import {useEffect, useState, useRef} from "react";
import FastAverageColor from 'fast-average-color';
import PokemonService from "./service/PokemonService";
import PokemonInformation from "./components/PokemonInformation";
import Navbar from "./components/Navbar";
import IconButton from "./components/IconButton";

const pokemonService = new PokemonService();

const fac = new FastAverageColor();

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState(null);
    const backgroundRef = useRef();

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
        let color;

        if (fallback) {
            color = "#4a4a4a";
        } else {
            const fullColor = await fac.getColorAsync(imgUrl);
            color = fullColor.hex;
        }

        backgroundRef.current.style.backgroundColor = color;
    }

    return (
        <div className="App">
            <div className="top-bar">
                <img src={`${process.env.PUBLIC_URL}/Pokédex_logo.png`} className="logo" alt=""/>
            </div>
            {/* Left column */}
            <div className="col image-column" ref={backgroundRef}>
                <div>{/* Placeholder */}</div>
                <div className="img-row">
                   <IconButton title="Previous" icon="faChevronLeft" onClick={() => updateScreen(pokemonInformation.id - 1)}/>
                    <img src={pokemonInformation?.img} className="pokemon-img" alt=""/>
                    <IconButton title="Next" icon="faChevronRight" onClick={() => updateScreen(pokemonInformation.id + 1)}/>
                </div>

                <div className="type-icon-parent">
                    {pokemonInformation && pokemonInformation.types.map(type => (
                        <img src={`${process.env.PUBLIC_URL}/types/${type}.png`} alt="" className="type-icon" title={type}/>
                    ))}
                </div>
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
