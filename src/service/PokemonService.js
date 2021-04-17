import axios from "axios";
import FormattingUtil from "../utils/FormattingUtil";

class PokemonService {
    async getAllNames() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=20000');

        return response.data.results.map(item => {
            const pokemon = {};

            pokemon.name = item.name;
            pokemon.id = item.url.replace("https://pokeapi.co/api/v2/pokemon-species/", "").slice(0, -1);

            return pokemon;
        })

    }

    async getPokemonByName(query) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);

        let types = [];

        for (let type of response.data.types) {
            types.push(FormattingUtil.capitalize(type.type.name));
        }


        const correctNames = new Map([
            ["mr-mime", "mr. mime"],
            ["deoxys-normal", "deoxys"],
            ["wormadam-plant", "wormadam"],
            ["giratina-altered", "giratina"],
            ["shaymin-land", "shaymin"],
            ["basculin-red-striped", "basculin"],
            ["darmanitan-standard", "darmanitan"],
            ["tornadus-incarnate", "tornadus"],
            ["thundurus-incarnate", "thundurus"],
            ["landorus-incarnate", "landorus"],
            ["keldeo-ordinary", "keldeo"],
            ["meloetta-aria", "meloetta"],
            ["meowstic-male", "meowstic"],
            ["aegislash-shield", "aegislash"],
            ["pumpkaboo-average", "pumpkaboo"],
            ["gourgeist-average", "gourgeist"],
            ["oricorio-baile", "oricorio"],
            ["lycanroc-midday", "lycanroc"],
            ["wishiwashi-solo", "wishiwashi"],
            ["type-null", "type: null"],
            ["minior-red-meteor", "minior"],
            ["mimikyu-disguised", "mimikyu"],
            ["toxtricity-amped", "toxtricity"],
            ["eiscue-ice", "eiscue"],
            ["indeedee-male", "indeedee"],
            ["zacian-hero", "zacian"],
            ["zamazenta-hero", "zamazenta"],
            ["urshifu-single-strike", "urshifu"]
        ]);

        const pokemonName = correctNames.has(response.data.name) ? correctNames.get(response.data.name) : response.data.name;
        
        return {
            id: response.data.id,
            name: FormattingUtil.capitalize(pokemonName),
            img: response.data.sprites.other["official-artwork"].front_default,
            height: FormattingUtil.roundOff(response.data.height * 0.1),
            weight: FormattingUtil.roundOff(response.data.weight * 0.1),
            stats: [
                {
                    name: "HP",
                    value: response.data.stats[0].base_stat
                },
                {
                  name: "Speed",
                  value: response.data.stats[5].base_stat
                },
                {
                    name: "Attack",
                    value: response.data.stats[1].base_stat
                },
                {
                    name: "Defense",
                    value:  response.data.stats[2].base_stat
                },
                {
                    name: "Sp. Attack",
                    value: response.data.stats[3].base_stat
                },
                {
                    name: "Sp. Defense",
                    value: response.data.stats[4].base_stat
                }
            ],
            types: types
        }
    }
}

export default PokemonService;