
function PokemonCard({data}) {

    if (data === "") return null;



    return (
        /*<div className="card-base">
            <div className="card-header" style={{"height": "32px"}}>
                <h1>Basic Pok&eacute;mon</h1>
                <div>
                    <div>
                        <p className="alignleft">{data.name}</p>
                        <p className="alignright">{data.stats.hp} HP</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={data.img} alt="" className="image-big" />
            </div>
            <div className="banner" style={{"textAlign": "center"}}>
                <p>&nbsp;{data.types[0]} Pok&eacute;mon. &nbsp;Length {data.height} m;&nbsp; Weight {data.weight} kg.</p>
            </div>
                <div className="inner-container">
                    <div className="footer" style={{"height": "34px"}}>
                        <hr></hr>
                        <div className="stats">
                            <div>Attack<br/>{data.stats.attack}</div>
                            <div>Defense<br/>{data.stats.defense}</div>
                            <div>Sp. Attack<br/>{data.stats.special_attack}</div>
                            <div>Sp. Defense<br/>{data.stats.special_defense}</div>
                        </div>
                    </div>
                    <div className="fun-fact">
                        <p className="fact">A {data.types[0]} Pok&eacute;mon. It does {data.types[0].toLowerCase()} things.&nbsp; LV. 17&nbsp; #{data.id}</p>
                    </div>
                    <p className="copyright"><strong>Illus. Ken Sugimori</strong>&nbsp; &copy;1995, 96, 98 Nintendo,
                        Creatures, GAMEFREAK. &copy;1999 Wizards.&nbsp;<strong>32/64&#8226;</strong></p>
                </div>
        </div>*/
        <img src={data.img} alt="" id="poke-img"/>
    );
}

export default PokemonCard