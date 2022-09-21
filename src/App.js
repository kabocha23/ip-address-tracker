import React, { useEffect, useState } from 'react';
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

  const submitIpAddy = e => {

    if(e) e.preventDefault();
    
    let apiURL = 'https://geo.ipify.org/api/v2/country,city?apiKey='+process.env.REACT_APP_IPIFY+'&ipAddress='+ipAddySubmission;

    setLoading(true);

    axios.get(apiURL).then((response) => {
        setData([response.data]);
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

  useEffect(() => {
    if(data.length) {
      setMarkerPosition([data[0].location.lat, data[0].location.lng]);
    }
  })
  

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
        <IPAddyRes data={data} />
        <IPAddyMap 
          markerPosition={markerPosition} 
        />
    </div>
  );
}

export default App;
