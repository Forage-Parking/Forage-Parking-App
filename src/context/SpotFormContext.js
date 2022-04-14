import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserId } from '../services/auth';
import { client } from '../services/client';

const SpotFormContext = createContext();

const SpotFormProvider = ({ children }) => {
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
  const user = getUserId();
  const history = useHistory();
//   const [currentUser, setCurrentUser] = useState(getUser());
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        created_at: new Date(),
        owner_id: user,
        details: details,
        size: size,
        price: price,
        image: avatar_Url,
        name: nickname,
        lat: lat,
        lng: lng,
      };
      let { error } = await client.from('parking-spots').upsert(updates, { returning: 'minimal' });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
    history.push('/');
  };




  return (
    <SpotFormProvider.Provider
      value={{
        //loading state/ currentUser check
        size,
        setSize,
        details,
        setDetails,
        nickname,
        setNickname,
        price,
        setPrice,
        avatarUrl, 
        setAvatarUrl,
        avatar_Url, 
        setAvatar_Url,
        loading,
        setLoading,
        handleSubmit,
        lat,
        setLat,
        setLng,
        lng,
        user,
        zoom,
        setZoom,

        ///Nav
      }}
    >
      {children}
    </SpotFormProvider.Provider>
  );
};

const useSpotFormContext = () => {
  const resp = useContext(SpotFormContext);

  if (resp === undefined) {
    //throw new Error('Error in BasicContext.js'); //turned off for more accurate erros
  }
  return resp;
};

export { SpotFormProvider, useSpotFormContext };
