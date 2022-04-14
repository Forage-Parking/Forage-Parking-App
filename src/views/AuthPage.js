import { useState } from 'react';
import { signInUser, signupUser } from '../services/auth';
import Auth from '../components/Auth';
import { useBasicContext } from '../context/BasicContext';

function AuthPage({ setCurrentUser }) {
  // const [type, setType] = useState('sign-in');
  const { username, 
    type, 
    error,
    password,
    email,
    setError,
    history } = useBasicContext();

  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'sign-in') {
      try {
        const resp = await signInUser(email, password);
        setCurrentUser(resp.email);
        history.push('/');
      } catch (e) {
        setError(e.message);
      }
    } else
      try {
        const resp = await signupUser(email, password, username);
        setCurrentUser(resp.email);
        history.push('/');
      } catch (e) {
        setError(e.message);
      }
  };
  
  return (
    <div>
      {error && <p>{error}</p>}
      <Auth {...{ handleSubmit }}/>
    </div>
  );
}

export default AuthPage;
