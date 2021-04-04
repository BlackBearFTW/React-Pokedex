
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
                        <img src="https://image.ibb.co/nhYAf6/purple_icon.png" alt="symbol" className="image-right"/>
                    </div>
                </div>
            </div>
            <div>
                <img src={data.img} alt="gastly" className="image-big" />
            </div>
            <div className="banner" style={{"textAlign": "center"}}>
                <p>&nbsp;{data.types[0]} Pok&eacute;mon. &nbsp;Length {data.height} m; Weight {data.weight} kg.</p>
            </div>
            <img src="https://image.ibb.co/jcMADR/foot.png" alt="foot" className="foot" />
                <div className="inner-container">
                    <div className="description" style={{"height": "120px"}}>
                        <p className="alignright-hp">10</p>
                        <p className="main-text"><strong>Lick</strong>&nbsp; Flip a coin. If heads, the Defending
                            <br/>Pok&eacute;mon is now Paralyzed.</p>
                        <hr/>
                        <p className="main-text"><strong>Energy Conversion</strong>&nbsp; Put up to 2 Energy
                            <br/>cards from your discard pile into your hand.
                            <br/>Gastly does 10 damage to itself.</p>
                    </div>
                    <div>
                        <img src="https://image.ibb.co/nhYAf6/purple_icon.png" alt="symbol" className="image-des1" />
                        <img src="https://image.ibb.co/nhYAf6/purple_icon.png" alt="symbol" className="image-des2" />
                        <img src="https://image.ibb.co/nhYAf6/purple_icon.png" alt="symbol"
                             className="image-des3" />
                    </div>
                    <div className="footer" style={{"height": "34px"}}>
                        <hr></hr>
                        <p className="align-stats-left">weakness</p>
                        <p className="align-stats-center">resistance</p>
                        <p className="align-stats-center-under">-30</p>
                        <p className="align-stats-right">retreat cost</p>
                        <img src="https://image.ibb.co/fB4zCb/imageedit_14_4776920873.png" alt="rock-symbol"
                             className="image-footer1" />
                    </div>
                    <div className="fun-fact">
                        <p className="fact">A mysterious Pok&eacute;mon. Some say it is a life-form from another
                            dimension, while others believe it is formed from smog.&nbsp; LV. 17&nbsp; #92</p>
                    </div>
                    <p className="copyright"><strong>Illus. Ken Sugimori</strong>&nbsp; &copy;1995, 96, 98 Nintendo,
                        Creatures, GAMEFREAK. &copy;1999 Wizards.&nbsp;<strong>32/64&#8226;</strong></p>
                </div>
        </div>
    );
}

export default PokemonCard