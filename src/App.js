import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Autocomplete from "./components/Autocomplete";
import FastAverageColor from 'fast-average-color';



function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState("");
    const fac = new FastAverageColor();


    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const roundOff = (n) => {
        return Math.round((n + Number.EPSILON) * 100) / 100
    }

    const updateBackground = () => {
        const app = document.querySelector(".App");
       const color = fac.getColor(document.querySelector("#pokemon-img"));
       app.style.backgroundColor = color.hex;
    }


    function getInformation(pokemon) {
        if (pokemon === "") return setPokemonInformation("");

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
            let types = [];

            for (let type of res.data.types) {
                types.push(capitalize(type.type.name));
            }

            const formattedData = {
                id: res.data.id,
                name: capitalize(res.data.name),
                img: res.data.sprites.other["official-artwork"].front_default,
                height: roundOff(res.data.height * 0.1),
                weight: roundOff(res.data.weight * 0.1),
                stats: {
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    special_attack: res.data.stats[3].base_stat,
                    special_defense: res.data.stats[4].base_stat,
                    speed: res.data.stats[5].base_stat,
                },
                types: types
            }

            setPokemonInformation(formattedData);
            updateBackground(formattedData.img)
        });
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118').then(res => {
            setPokemonList(res.data.results.map(poke => poke.name));
        });
    }, []);


    return (
        <div className="App">
            <div className="col left-col">
                <img src={pokemonInformation.img} id="pokemon-img" alt="" crossOrigin=""/>
            </div>
            <div className="col right-col">
                <Autocomplete options={pokemonList} limit="10" callback={getInformation}></Autocomplete>
            </div>
        </div>
    );

}

export default App;
