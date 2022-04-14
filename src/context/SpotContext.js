import { createContext, useContext, useState } from 'react';

const SpotContext = createContext();


const SpotProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar_Url, setAvatar_Url] = useState(null);
  const [size, setSize] = useState('compact');
  const [details, setDetails] = useState('');
  const [nickname, setNickname] = useState('');
  const [price, setPrice] = useState('5');
  const [loading, setLoading] = useState(false);

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
      setZoom
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
  