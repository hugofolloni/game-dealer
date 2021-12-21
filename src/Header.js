import React, { useState } from 'react';

const Header = () => {

    const [searchTo, setSearchTo] = useState('');

    const handleSearch = () =>{
        window.location.href = `/search?q=${searchTo}`;
    }

    return ( 
        <div className="header">
            <div className="app-name">
                <a href="/">
                    <h1>Game Dealer</h1>
                    <p>Find the best prices for your favorite games</p>
                </a>
            </div>
            <div className="search-header-div">
                <input type="text" placeholder="Search for a game..." value={ searchTo } onChange={(e) => setSearchTo(e.target.value)} />
                <button onClick={ handleSearch }>Search</button>
            </div>
        </div>
     );
}
 
export default Header;