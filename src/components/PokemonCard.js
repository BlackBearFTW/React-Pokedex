
function PokemonCard({data}) {

    if (data === "") return null;






    return (
        <div className="card-base">
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
                            <div>attack</div>
                            <div>defense</div>
                            <div>sp attack</div>
                            <div>sp defense</div>
                        </div>
                    </div>
                    <div className="fun-fact">
                        <p className="fact">A mysterious Pok&eacute;mon. Some say it is a life-form from another
                            dimension, while others believe it is formed from smog.&nbsp; LV. 17&nbsp; #{data.id}</p>
                    </div>
                    <p className="copyright"><strong>Illus. Ken Sugimori</strong>&nbsp; &copy;1995, 96, 98 Nintendo,
                        Creatures, GAMEFREAK. &copy;1999 Wizards.&nbsp;<strong>32/64&#8226;</strong></p>
                </div>
        </div>
    );
}

export default PokemonCard