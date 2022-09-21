import React, { useState } from 'react';
import IPAddyInput from './components/1. IPAddyInput/IPAddyInput';
import IPAddyRes from './components/2. IPAddyRes/IPAddyRes';
import IPAddyMap from './components/3. IPAddyMap/IPAddyMap';
import './App.css';

function App() {

  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09])


  return (
    <div className="App">
        <IPAddyInput />
        <IPAddyRes />
        <IPAddyMap 
          markerPosition={markerPosition} 
          setMarkerPosition={setMarkerPosition}
        />
    </div>
  );
}

export default App;
