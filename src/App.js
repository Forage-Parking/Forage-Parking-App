import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './views/AuthPage';
import Home from './views/Home';
import { getUser } from './services/auth';
import { useState } from 'react';
import SpotDetail from './views/SpotDetail/SpotDetail';
import styled from 'styled-components';

import NewSpot from './views/NewSpot/NewSpot';
import OwnerEdit from './views/OwnerEdit/OwnerEdit';
import Profile from './views/Profile/Profile';
import HeaderNav from './components/HeaderNav';
import Devs from './views/Devs';

function App() {
  const user = getUser();
  const [currentUser, setCurrentUser] = useState(user);
  return (
    <BrowserRouter>
      <AppDiv>
        <HeaderNav />
        <Switch>
          <Route path="/auth">
            {!currentUser ? <AuthPage {...{ setCurrentUser }} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {currentUser ? <Home /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/spots/detail/:id">
            {currentUser ? <SpotDetail /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/spots/new">
            {currentUser ? <NewSpot /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/spots/:id/edit">
            {currentUser ? <OwnerEdit /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/profile/:id">
            {currentUser ? <Profile /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/devs">
            {currentUser ? <Devs /> : <Redirect to="/auth" />}
          </Route>
        </Switch>
      </AppDiv>
    </BrowserRouter>
  );
}

const AppDiv = styled.div`
  text-align: center;
  color: #f4f1de;
  background-color: #3d405b;
  height: 100vh;
`;
//adding change for push//
export default App;
