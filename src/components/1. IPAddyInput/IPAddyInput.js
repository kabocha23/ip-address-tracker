import React from 'react';

import './IPAddyInput.css';

const IPAddyInput = () => {


    return(
        <div className='ipAddyInput-container'>
            <div className='ipAddyInput-title'>
                <h1>IP You</h1>
                <h2>An IP Address Tracker</h2>
            </div>
            <div className='ipAddyInput-search'>
                <form>                
                    <input placeholder='Search for an IP Address Here...'></input>
                    <button></button>
                </form>
            </div>
        </div>
    )

};

export default IPAddyInput;