import logo from "../Pokédex_logo.png"

function Navbar({searchbar}) {
    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            {searchbar}
        </div>
    )
}

export default Navbar;