import React from 'react';
import Nav from './Nav';
import { Header } from 'grommet';
import { IoLeafOutline } from 'react-icons/io5';
import styled from 'styled-components';

function HeaderNav() {
  return (
    <>
      <Logo>
        For
        <IoLeafOutline />
        ge
      </Logo>
      <Header background="#f2cc8f" pad="small" justify="between">
        <Nav direction="row" />
      </Header>
    </>
  );
}

const Logo = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;
export default HeaderNav;
