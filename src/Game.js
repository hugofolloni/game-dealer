import React, { useState, useEffect } from "react";
import { storesLink } from "./data/stores-links"

const Game = () => {

    const dealId = window.location.href.split('?q=')[1];

    const [gamePrice, setGamePrice] = useState(null);
    const [gameName, setGameName] = useState(null);
    const [gameThumb, setGameThumb] = useState(null);
    const [gameScore, setGameScore] = useState(null);
    const [gameStore, setGameStore] = useState(null);
    const [gameStoreLogo, setGameStoreLogo] = useState(null);
    const [gameStoreLink, setGameStoreLink] = useState(null);
    const [gameReleaseDate, setGameReleaseDate] = useState(null);
    const [gameMetacriticLink, setGameMetacriticLink] = useState(null);
    
    var proxy = 'https://the-cors.herokuapp.com/';
    var api = `${proxy}https://www.cheapshark.com/api/1.0/deals?id=${dealId}`


    useEffect(() => {
        fetch(api).then(res => res.json()).then(data => {
            console.log(data)
            setGameName(data.gameInfo.name);
            setGamePrice(data.gameInfo.salePrice);
            setGameThumb(data.gameInfo.thumb);
            setGameScore(data.gameInfo.metacriticScore);
            setGameReleaseDate(timeConverter(data.gameInfo.releaseDate))
            setGameMetacriticLink("https://metacritic.com/" + data.gameInfo.metacriticLink);
            const storeId = data.gameInfo.storeID
            var proxy = 'https://the-cors.herokuapp.com/';
            var api = `${proxy}https://www.cheapshark.com/api/1.0/stores`
            for(var i = 0; i < storesLink.length; i++){
                if(storeId === storesLink[i].storeID){
                    setGameStoreLink(storesLink[i].link)
                }
             }
            fetch(api).then(res => res.json()).then(data => {
                setGameStore(data[storeId - 1].storeName);
                setGameStoreLogo("https://www.cheapshark.com" + data[storeId - 1].images.logo);
            }
            )
        });
    }, [api, dealId]);

    const timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate() + 1;

        var time = date + '/' + month + '/' + year;
        return time;
    }

    const goTo = (link) => {
        window.location.href = link;
    }

    return ( 
        <div className="game-div">
            <div className="left">
                <div className="main-game-info">
                    <h1>{gameName}</h1>
                </div>
                <p className='price-p'>Price: U${gamePrice}</p>
                <div className="more-info">
                    <div className="div-info">
                        <p>Metacritic Score: { gameScore }</p>
                        <button onClick={() => goTo(gameMetacriticLink) }>Review</button>
                    </div>
                    <div className="div-info">
                        <p>Store: <img src={ gameStoreLogo } alt="" height='25px' />   { gameStore }</p>
                        <button onClick={() => goTo(gameStoreLink) }>Go</button>
                    </div>
                    <p>Release date: { gameReleaseDate }</p>
                </div>
            </div>
            <div className="right">
              <img src={ gameThumb } alt="" />
            </div>
        </div>
     );
}
 
export default Game;