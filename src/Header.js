import React, { useState } from 'react';
import logo from './assets/logo.png';

const Header = () => {

    const [searchTo, setSearchTo] = useState('');

    const handleSearch = (event) =>{
        if(event.key === "Enter"){
            window.location.href = `/search?q=${searchTo}`;
        }
    }

    return ( 
        <div className="header">
            <div className="true-header">
                <div className="app-name">
                    <a className='link-to-home' href="/">
                        <img src={ logo } alt="" width='80px'/> 
                    </a>
                </div>
                <div className="links">
                    <div className="single-link">
                        <a href="/">Top Games</a>
                    </div>
                    <div className="single-link">
                        <a href="/">Under 10</a>
                    </div>
                    <div className="single-input">
                        <div className="search-header-div">
                            <input type="text" placeholder="Search for a game..." value={ searchTo } onChange={(e) => setSearchTo(e.target.value)} onKeyDown={ handleSearch }/>
                        </div>
                    </div>
                    <div className="single-link">
                        <a href="/aboutus">About us</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;