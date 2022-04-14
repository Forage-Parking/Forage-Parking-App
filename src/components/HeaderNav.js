import React from 'react';
import Nav from './Nav';
import { Header } from 'grommet';
import { IoLeafOutline } from 'react-icons/io5';
import styled from 'styled-components';

function HeaderNav() {
  return (
    <Header background="linear-gradient(to right, #c9d6ff, #e2e2e2)" pad="small" justify="between">
      <Logo>
        For
        <IoLeafOutline />
        ge
      </Logo>
      <Nav direction="row" />
    </Header>
  );
}

const Logo = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;
export default HeaderNav;
