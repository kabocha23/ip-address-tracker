import React from 'react';

import './IPAddyRes.css';

const IPAddyRes = () => {


    return(
        <div className='ipAddyRes-container'>
            <div className='ipAddyRes-ip-addy'>
                <p>IP ADDRESS</p>
            </div>
            <div className='ipAddyRes-location'>
                <p>LOCATION</p>
            </div>
            <div className='ipAddyRes-timezone'>
                <p>TIMEZONE</p>
            </div>
            <div className='ipAddyRes-isp'>
                <p>ISP</p>
            </div>
        </div>
    )

};

export default IPAddyRes;