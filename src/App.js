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
<<<<<<< HEAD
    <div className="App">
      FORAGE PARKING <br></br>The best parking app that ever existed!
    </div>
=======

    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/auth">
            {!currentUser ? <AuthPage {...{ setCurrentUser }} /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Route path="/">{currentUser ? <Home /> : <Redirect to="/auth" />}</Route>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
>>>>>>> 049ea16222ecb570e57f110b86508ea6a37cab13
  );
}

//adding change for push//
export default App;
