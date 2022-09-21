import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SetViewOnClick from '../SetViewOnClick/SetViewOnClick';
import './IPAddyMap.css';

const IPAddyMap = ({ markerPosition }) => {
    

    return(
        <div className='ipAddyMap-container'>
            <div id="map">
                <MapContainer 
                    center={markerPosition} 
                    zoom={13} 
                    scrollWheelZoom={true} 
                >
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={markerPosition}>
                    <Popup>
                        Here you go, <br /> Mr. Stalker. 
                    </Popup>
                    </Marker>
                    <SetViewOnClick 
                        coords={markerPosition}
                    />
                </MapContainer>
            </div>
        </div>
    )

};

export default IPAddyMap;