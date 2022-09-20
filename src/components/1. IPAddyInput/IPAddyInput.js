import React from 'react';

import './IPAddyInput.css';

const IPAddyInput = () => {


    return(
        <div className='ipAddyInput-container'>
            <div className='ipAddyInput-title'>
                <h2>IP Finder</h2>
                <h3>An IP Address Tracker</h3>
            </div>
            <div className='ipAddyInput-search'>
                <form>                
                    <input placeholder='Search for any IP address or domain...'></input>
                    <button>&gt;</button>
                </form>
            </div>
        </div>
    )

};

export default IPAddyInput;