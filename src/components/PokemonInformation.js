import PokemonStat from "./PokemonStat";

function PokemonInformation({data}) {
    return (
        <div className="stats">
            <div style={{gridColumnStart: "span 2"}}>
                <div className="pokemon-name">
                    {data.name.replaceAll("-", "‑")}
                </div>
                <div className="pokemon-id">#{data?.id.toString().padStart(3, '0')}</div>
            </div>

            {data.stats.map(
                (stat) => <PokemonStat stat={stat?.name} value={stat?.value}/>
            )}

            <div className="other-stats">
                Height: {data?.height}M Weight: {data?.weight}Kg
            </div>
        </div>
    );
}

export default PokemonInformation;