import React from 'react';
import Nav from './Nav';
import { Avatar, Header } from 'grommet';
import { IoLeafOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { logout } from '../services/auth';
import { Link } from 'react-router-dom';
import { useBasicContext } from '../context/BasicContext';
import { useProfileContext } from '../context/ProfileContext';

function HeaderNav() {
  const { setCurrentUser } = useBasicContext();
  const { avatarUrl } = useProfileContext();
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
    history.go(0);
  };

  return (
    <>
      <StyledDiv>
        <Avatar src={avatarUrl} />
        <Logout onClick={handleLogout}>logout</Logout>
      </StyledDiv>
      <Logo to="/devs">
        For
        <IoLeafOutline />
        ge
      </Logo>
      <Header direction="row" background="#81b29a" pad="small" justify="between">
        <Nav />
      </Header>
    </>
  );
}

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  color: #f4f1de;
  svg {
    color: #81b29a;
    transform: scale(-1, 1) rotate(90deg) translate(4px, -10%);
  }
`;
const Logout = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  color: #f4f1de;
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  transform: scale(0.8);
  z-index: 1000;
`;
const StyledDiv = styled.div`
  display: flex;
  button {
    position: absolute;
    right: 0;
  }
  div {
    left: 1;
  }
`;
export default HeaderNav;
