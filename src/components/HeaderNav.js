import React from 'react';
import Nav from './Nav';
import { Header } from 'grommet';
import { IoLeafOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { logout } from '../services/auth';
import { useBasicContext } from '../context/BasicContext';

function HeaderNav() {
  const { setCurrentUser } = useBasicContext();
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
    history.go(0);
  };

  return (
    <>
      <Logout onClick={handleLogout}>logout</Logout>
      <Logo>
        For
        <IoLeafOutline />
        ge
      </Logo>
      <Header background="#81b29a" pad="small" justify="between">
        <Nav direction="row" />
      </Header>
    </>
  );
}

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
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
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  transform: scale(0.8);
  z-index: 1000;
`;
export default HeaderNav;
