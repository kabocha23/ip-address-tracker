import React, { useState } from 'react';
import IPAddyInput from './components/1. IPAddyInput/IPAddyInput';
import IPAddyRes from './components/2. IPAddyRes/IPAddyRes';
import IPAddyMap from './components/3. IPAddyMap/IPAddyMap';
import axios from 'axios';
import './App.css';

const App = () => {

  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);
  const [ipAddySubmission, setIpAddySubmit] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const changeCenter = () => {
    setMarkerPosition([37.7749, 122.4194])
  }

  const submitIpAddy = e => {

    if(e) e.preventDefault();
    
    let apiURL = 'https://geo.ipify.org/api/v2/country?apiKey='+process.env.REACT_APP_IPIFY+'&ipAddress='+ipAddySubmission;

    console.log(apiURL)

    setLoading(true);

    axios.get(apiURL).then((response) => {
        setData([...data, response.data]);
        console.log(response.data);
    }).catch((err) => {
        setError(err);
        console.log(err);
        console.log(err.response.data.error);
    }).finally(() => {
        setLoading(false);
        console.log(loading);
    });

    setIpAddySubmit('');
    
    return { data, error, loading };
  }

  return (
    <div className="App">
        <IPAddyInput 
          ipAddySubmission={ipAddySubmission}
          setIpAddySubmit={setIpAddySubmit}
          submitIpAddy={submitIpAddy}
          data={data}
          error={error}
          loading={loading}
        />
        <IPAddyRes />
        <IPAddyMap 
          markerPosition={markerPosition} 
        />
    </div>
  );
}

export default App;
