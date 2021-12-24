import React, { useState } from 'react';
import gamepad from './assets/gamepad.png';

const Homepage = () => {

    const [searchTo, setSearchTo] = useState('');

    const handleSearch = (event) =>{
        if(event.key === "Enter"){
            window.location.href = `/search?q=${searchTo}`;
        }
    }

    return ( 
        <div className="homepage-div">
            <div className="homepage-main-content">
                <div className="main-title">
                    <h1>Find the best prices <br /> for your favorite games</h1>
                </div>
                <div className="input-search">
                    <input type="text" placeholder="Search for a game..." value={ searchTo } onChange={(e) => setSearchTo(e.target.value)} onKeyPress={ handleSearch }/>
                </div>
            </div>

            <div className="gamepad-div">
                <img className='gamepad-image' src={ gamepad } alt="" />
            </div>
        </div>
     );
}
 
export default Homepage;