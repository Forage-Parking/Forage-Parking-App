import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, logout } from '../services/auth';

const BasicContext = createContext();

const BasicProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(getUser());
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };

  return (
    <BasicContext.Provider
      value={{
        //loading state/ currentUser check
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        handleLogout,
        history,
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
    //throw new Error('Error in BasicContext.js'); //turned off for more accurate erros
  }
  return resp;
};

export { BasicProvider, useBasicContext };
