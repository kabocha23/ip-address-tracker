import React from 'react';

import './IPAddyRes.css';

const IPAddyRes = () => {


    return(
        <div className='ipAddyRes-container'>
            <div className='ipAddyRes-sub ipAddyRes-ip-addy'>
                <p className='ipAddyRes-title'>IP ADDRESS</p>
            </div>
            <div className='ipAddyRes-divider'></div>
            <div className='ipAddyRes-sub ipAddyRes-location'>
                <p className='ipAddyRes-title'>LOCATION</p>
            </div>
            <div className='ipAddyRes-divider'></div>
            <div className='ipAddyRes-sub ipAddyRes-timezone'>
                <p className='ipAddyRes-title'>TIMEZONE</p>
            </div>
            <div className='ipAddyRes-divider'></div>
            <div className='ipAddyRes-sub ipAddyRes-isp'>
                <p className='ipAddyRes-title'>ISP</p>
            </div>
        </div>
    )

};

export default IPAddyRes;