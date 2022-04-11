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
  );
}

//adding change for push//
export default App;
