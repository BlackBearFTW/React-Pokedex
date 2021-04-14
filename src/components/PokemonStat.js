function PokemonStat({ stat, value }) {
    return (
        <div>
            <span>{value}</span>
            <span>{stat}</span>
        </div>
    );
}

export default PokemonStat;