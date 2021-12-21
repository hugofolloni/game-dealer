import React, { useState } from 'react';

const Homepage = () => {

    const [searchTo, setSearchTo] = useState('');

    const handleSearch = () =>{
        window.location.href = `/search?q=${searchTo}`;
    }

    return ( 
        <div className="homepage-div">
            <div className="input-search">
                <input type="text" placeholder="Search for a game..." value={ searchTo } onChange={(e) => setSearchTo(e.target.value)} />
                <button onClick={ handleSearch }>Search</button>
            </div>
        </div>
     );
}
 
export default Homepage;