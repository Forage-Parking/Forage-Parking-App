import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './views/AuthPage';
import Home from './views/Home';
import { getUser } from './services/auth';
import { useState } from 'react';
import SpotDetail from './views/SpotDetail/SpotDetail';
import SpotSearch from './views/SpotSearch/SpotSearch';

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
          <Route exact path="/">
            {currentUser ? <Home /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/spots/search">
            {currentUser ? <SpotSearch /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/spots/detail/:id">
            {currentUser ? <SpotDetail /> : <Redirect to="/auth" />}
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

//adding change for push//
export default App;
