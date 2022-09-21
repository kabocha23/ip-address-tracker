import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'
import './IPAddyMap.css';

const IPAddyMap = ({ markerPosition, setMarkerPosition }) => {
    
    const map = useMap();
    const changePosition = () => {
      setMarkerPosition([50, -0.5])
      map.setView(markerPosition);
      console.log(markerPosition)
      return null;
    }

    return(
        <div className='ipAddyMap-container'>
            <p onClick={changePosition}>click here</p>
            <div id="map">
                <MapContainer center={markerPosition} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={markerPosition}>
                    <Popup>
                        Here you go, <br /> Mr. Stalker.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )

};

export default IPAddyMap;