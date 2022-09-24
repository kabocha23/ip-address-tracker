import React from 'react';
import './IPAddyInput.css';

const IPAddyInput = ({ ipAddySubmission, setIpAddySubmit, submitIpAddy, loading }) => {

    return(
        <div className='ipAddyInput-container'>
            <div className='ipAddyInput-title'>
                <h2>IP Finder</h2>
            </div>
            <div className='ipAddyInput-search'>
                {loading && <div className="loading-text"><p>Loading...</p></div>}
                <form onSubmit={submitIpAddy}>                
                    <input 
                        type='text' 
                        name='input-ip'
                        placeholder='Search for any IP address or domain...'
                        value={ipAddySubmission || ''}
                        onChange={e => setIpAddySubmit(e.target.value)}
                    ></input>
                    <button type='submit'>&gt;</button>
                </form>
            </div>
        </div>
    )

};

export default IPAddyInput;