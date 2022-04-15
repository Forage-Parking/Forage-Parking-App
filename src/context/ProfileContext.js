import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState('');
  const [spots, setSpots] = useState([]);

  return (
    <ProfileContext.Provider value={{
        
      firstName, setFirstName,
      lastName, setLastName,
      username, setUsername,
      email, setEmail,
      loading, setLoading,
      avatarUrl, setAvatarUrl,
      clicked, setClicked,
      error, setError,
      spots, setSpots,

    }}>
      {children}</ProfileContext.Provider>
  );
};

const useProfileContext = () => {
  const resp = useContext(ProfileContext);
  
  if (resp === undefined) {
    throw new Error('Error in ProfileContext.js'); 
  }
  return resp;
};
  
export { ProfileProvider, useProfileContext };