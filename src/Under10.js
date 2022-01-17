import { useState, useEffect } from 'react';
import U10List from './U10List';

const Under10 = () => {

    const [searchResults, setSearchResults] = useState(null);

    var proxy = 'https://the-cors.herokuapp.com/';
    var api = `${proxy}https://www.cheapshark.com/api/1.0/deals?upperPrice=10`

    useEffect(() => {
    fetch(api).then(res => res.json()).then(data => {
        setSearchResults(data);
        console.log(data);
    });
    }, [api]);


    return ( 
        <div className="search-div">
            <div className="under10-title">
                <h1>These are the games Under 10USD that you should know:</h1>
            </div>
            { searchResults && <U10List list={ searchResults } /> }
        </div>
     );
}
 
export default Under10;