import { createContext, useContext, useState } from 'react';
import { getUserId } from '../services/auth';

const SpotContext = createContext();


const SpotProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar_Url, setAvatar_Url] = useState(null);
  const [size, setSize] = useState('compact');
  const [details, setDetails] = useState('');
  const [nickname, setNickname] = useState('');
  const [price, setPrice] = useState('5');
  const [loading, setLoading] = useState(false);

  const [spot, setSpot] = useState('');
  const [error, setError] = useState('');

  const [available, setAvailable] = useState(false);
  const [recentRes, setRecentRes] = useState({});


  const [lat, setLat] = useState(45.523064);
  const [lng, setLng] = useState(-122.676483);
  const [zoom, setZoom] = useState(9);
  const user = getUserId();



    
  return (
    <SpotContext.Provider value={{ 
      avatarUrl, 
      setAvatarUrl, 
      avatar_Url, 
      setAvatar_Url, 
      size, 
      setSize, 
      details, 
      setDetails, 
      nickname, 
      setNickname, 
      price, 
      setPrice, 
      loading, 
      setLoading,
      //Map Inof//
      lat, 
      setLat, 
      lng, 
      setLng,
      zoom, 
      setZoom,
      user, 
      available, 
      setAvailable, 
      recentRes, 
      setRecentRes,
      error, 
      setError, 
      spot, 
      setSpot,
    }}>
      {children}
    </SpotContext.Provider>
  );
};

const useSpotContext = () => {
  const resp = useContext(SpotContext);
  
  if (resp === undefined) {
    throw new Error('Error in SpotContext.js'); 
  }
  return resp;
};
  
export { SpotProvider, useSpotContext };
  