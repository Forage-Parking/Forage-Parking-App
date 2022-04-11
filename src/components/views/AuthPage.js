import { useState } from 'react';
import { signInUser, signupUser } from '../../services/auth';
import Auth from '../Auth';
import { useHistory } from 'react-router-dom';

function AuthPage({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('sign-in');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'sign-in') {
      try {
        const resp = await signInUser(email, password);
        setCurrentUser(resp.email);
        history.push('/todo');
      } catch (e) {
        setError(e.message);
      }
    } else
      try {
        const resp = await signupUser(email, password);
        setCurrentUser(resp.email);
        history.push('/todo');
      } catch (e) {
        setError(e.message);
      }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <Auth {...{ error, password, email, setEmail, setPassword, handleSubmit, type, setType }} />
    </div>
  );
}

export default AuthPage;
