import React, { useState, useEffect } from 'react';
import List from './List';

const Search = () => {

    const searchTo = window.location.href.split('search?q=')[1].split('%20').join(' ').toUpperCase();

    const [searchResults, setSearchResults] = useState(null);

    const [dataLength, setDataLength] = useState("Loading...")

    var proxy = 'https://the-cors.herokuapp.com/';
    var api = `${proxy}https://www.cheapshark.com/api/1.0/games?title=${searchTo.toLowerCase()}`

    useEffect(() => {
        fetch(api).then(res => res.json()).then(data => {
            setSearchResults(data);
            console.log(data);
            setDataLength(`${ data.length } results for your search.`);
        });
    }, [api, searchTo]);


    return ( 
        <div className="search-div">
            <div className="search-data">
                <h1>These are the games that you're looking for: { searchTo }</h1>
                <p>{ dataLength }</p>
            </div>
            { searchResults && <List list={ searchResults } /> }
        </div>
     );
}
 
export default Search;