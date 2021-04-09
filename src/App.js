import './App.css';
import {Component} from "react";
import Autocomplete from "./components/Autocomplete";
import FastAverageColor from 'fast-average-color';
import PokemonService from "./service/PokemonService";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.pokemon = null;
        this.pokemonList = null;
        this.pokemonService = null;
    }

    async componentDidMount() {
        this.pokemonService = new PokemonService();
        this.fac = new FastAverageColor();
        this.pokemonList = await this.pokemonService.getAllNames();

    }

    async getPokemon({pokemon}) {
        this.pokemon = await this.pokemonService.getPokemonByName(pokemon);
    }

    render() {
        return (
            <div className="App">
                <div className="col left-col">
                    <img src={ (this.pokemon !== null) ? this.pokemon.img : "" } id="pokemon-img" alt="" crossOrigin="anonymous"/>
                </div>
                <div className="col right-col">
                    <Autocomplete options={this.pokemonList} limit="10" callback={this.getPokemon}/>
                </div>
            </div>
        )
    }
}


/*function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState("");
    const fac = new FastAverageColor();


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
                types.push(FormattingUtil.capitalize(type.type.name));
            }

            const formattedData = {
                id: res.data.id,
                name: FormattingUtil.capitalize(res.data.name),
                img: res.data.sprites.other["official-artwork"].front_default,
                height: FormattingUtil.roundOff(res.data.height * 0.1),
                weight: FormattingUtil.roundOff(res.data.weight * 0.1),
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


    return (
        <div className="App">
            <div className="col left-col">
                <img src={pokemonInformation.img} id="pokemon-img" alt="" crossOrigin="anonymous"/>
            </div>
            <div className="col right-col">
                <Autocomplete options={pokemonService.getAllNames()} limit="10" callback={getInformation}></Autocomplete>
            </div>
        </div>
    );

}*/

export default App;
