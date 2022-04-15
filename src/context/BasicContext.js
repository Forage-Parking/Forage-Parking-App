import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../services/auth';

const BasicContext = createContext();

const BasicProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(getUser());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('sign-in');
  const [username, setUsername] = useState('');
  const history = useHistory();

 

  return (
    <BasicContext.Provider
      value={{
        //loading state/currentUser check/AuthStuff
        email, 
        setEmail,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        history,
        password, 
        setPassword,
        error, 
        setError,
        type, 
        setType,
        username, 
        setUsername,
        ///
      }}
    >
      {children}
    </BasicContext.Provider>
  );
};

const useBasicContext = () => {
  const resp = useContext(BasicContext);

  if (resp === undefined) {
    throw new Error('Error in BasicContext.js');
  }
  return resp;
};

export { BasicProvider, useBasicContext };
