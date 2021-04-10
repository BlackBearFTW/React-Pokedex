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
        const dynamicBackground = document.querySelector(".dynamic-background");
        const color = await fac.getColorAsync(imgUrl);
        dynamicBackground.style.backgroundColor = color.hex;
    }

    return (
/*        <div className="App">
            <div className="col left-col">
                <img src={pokemonInformation.img} id="pokemon-img" alt="" />
            </div>
            <div className="col right-col">
                <div className="navbar">
                    <img src={logo} className="logo" alt=""/>
                    <Autocomplete options={pokemonList} limit="10" placeholder="Search Pokémon" callback={handleAutoComplete}/>
                </div>
                { pokemonInformation !== "" &&
                  <div className="data-wrapper">
                      <div className="pokemon-name">{pokemonInformation.name}</div>
                      <div className="pokemon-id">#{("00" + pokemonInformation.id).slice(-3)}</div>

                      <div className="stats">
                          <div><span>{pokemonInformation.stats.hp}</span><br/>HP</div>
                          <div><span>{pokemonInformation.stats.speed}</span><br/>Speed</div>
                          <div><span>{pokemonInformation.stats.attack}</span><br/>Attack</div>
                          <div><span>{pokemonInformation.stats.defense}</span><br/>Defense</div>
                          <div><span>{pokemonInformation.stats.special_attack}</span><br/>Sp. Attack</div>
                          <div><span>{pokemonInformation.stats.special_defense}</span><br/>Sp. Attack</div>
                          <div>Height: {pokemonInformation.height}M; Weight: {pokemonInformation.weight}Kg</div>
                      </div>
                  </div>
                }
            </div>
        </div>*/

             <div className="App">
                 <div className="dynamic-background col">
                     <img src={pokemonInformation.img} alt=""/>
                     <div className="types">
                         <div className="type-icon">Icon</div>
                         <div className="type-icon">Icon</div>
                     </div>
                 </div>
                 <div className="col">
                     <img src={logo} className="logo" alt=""/>
                     <Autocomplete options={pokemonList} limit="10" placeholder="Search Pokémon" callback={handleAutoComplete}/>
                 </div>
             </div>
    );

}


export default App;
