import React from 'react';

import './IPAddyRes.css';

const IPAddyRes = ({ data }) => {

    return(
        <div className='ipAddyRes-container'>
            <div className='ipAddyRes-sub ipAddyRes-ip-addy'>
                <p className='ipAddyRes-title'>IP ADDRESS</p>
                {data.length 
                    ? <p className='ipAddyRes-content'>{data[0].ip}</p> 
                    : ''
                }
            </div>
            <div className='ipAddyRes-divider'></div>
            <div className='ipAddyRes-sub ipAddyRes-location'>
                <p className='ipAddyRes-title'>LOCATION</p>
                {data.length 
                    ? <p className='ipAddyRes-content'>{data[0].location.city}, {data[0].location.region} {data[0].location.postalCode}</p> 
                    : ''
                }
            </div>
            <div className='ipAddyRes-divider'></div>
            <div className='ipAddyRes-sub ipAddyRes-timezone'>
                <p className='ipAddyRes-title'>TIMEZONE</p>
                {data.length 
                    ? <p className='ipAddyRes-content'>{data[0].location.timezone}</p> 
                    : ''
                }
            </div>
            <div className='ipAddyRes-divider'></div>
            <div className='ipAddyRes-sub ipAddyRes-isp'>
                <p className='ipAddyRes-title'>ISP</p>
                {data.length 
                    ? <p className='ipAddyRes-content'>{data[0].isp}</p> 
                    : ''
                }
            </div>
        </div>
    )

};

export default IPAddyRes;