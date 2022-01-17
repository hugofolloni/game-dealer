import { useState, useEffect } from 'react';
import TGList from './TGList';

const TopGames = () => {

    const [searchResults, setSearchResults] = useState(null);

    var proxy = 'https://the-cors.herokuapp.com/';
    var api = `${proxy}https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Metacritic`

    useEffect(() => {
    fetch(api).then(res => res.json()).then(data => {
        setSearchResults(data);
        console.log(data);
    });
    }, [api]);


    return ( 
        <div className="search-div">
            <div className="topgames-title">
                <h1>These are the top Metacritic games that we found on Steam:</h1>
            </div>
            { searchResults && <TGList list={ searchResults } /> }
        </div>
     );
}
 
export default TopGames;