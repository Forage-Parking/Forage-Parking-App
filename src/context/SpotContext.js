import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSignedUrl, getUserId } from '../services/auth';
import { client } from '../services/client';

const SpotContext = createContext();


const SpotProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar_Url, setAvatar_Url] = useState(null);
  const [size, setSize] = useState('compact');
  const [details, setDetails] = useState('');
  const [nickname, setNickname] = useState('');
  const [price, setPrice] = useState('5');
  const [loading, setLoading] = useState(false);
  const user = getUserId();

  const [lat, setLat] = useState(45.523064);
  const [lng, setLng] = useState(-122.676483);
  const [zoom, setZoom] = useState(9);



    
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
    }}>
      {children}
    </SpotContext.Provider>
  );
};

const useSpotContext = () => {
  const resp = useContext(SpotContext);
  
  if (resp === undefined) {
      //throw new Error('Error in BasicContext.js'); //turned off for more accurate erros
  }
  return resp;
};
  
export { SpotProvider, useSpotContext };
  