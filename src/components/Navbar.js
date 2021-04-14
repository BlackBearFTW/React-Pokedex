import Autocomplete from "./Autocomplete";

function Navbar({data, callback}) {
    return (
        <div>
            <div className="navbar">
                <img src={`${process.env.PUBLIC_URL}/Pokédex_logo.png`} className="logo" alt=""/>
                <Autocomplete options={data} limit="10" placeholder="Search Pokémon"
                              callback={callback}/>
            </div>
        </div>
    )
}

export default Navbar;