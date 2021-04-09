import axios from "axios";
import FormattingUtil from "../utils/FormattingUtil";

class PokemonService {
    async getAllNames() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
        return response.data.results.map(poke => poke.name)
    }

    async getPokemonByName(name) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

        let types = [];

        for (let type of response.data.types) {
            types.push(FormattingUtil.capitalize(type.type.name));
        }

        return {
            id: response.data.id,
            name: FormattingUtil.capitalize(response.data.name),
            img: response.data.sprites.other["official-artwork"].front_default,
            height: FormattingUtil.roundOff(response.data.height * 0.1),
            weight: FormattingUtil.roundOff(response.data.weight * 0.1),
            stats: {
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                special_attack: response.data.stats[3].base_stat,
                special_defense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
            },
            types: types
        }
    }
}

export default PokemonService;