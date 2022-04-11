import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './components/views/AuthPage';
import Home from './components/views/Home';
import { getUser } from './services/auth';
import { useState } from 'react';

function App() {
  const user = getUser();
  const [currentUser, setCurrentUser] = useState(user);
  return (
    <div className="App">
      FORAGE PARKING <br></br>The best parking app that ever existed!
    </div>
  );
}

//adding change for push//
export default App;
