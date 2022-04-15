import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoLeafOutline } from 'react-icons/io5';
import { fetchProfileByUserId } from '../services/fetch';
import { getUserId } from '../services/auth';

function Nav() {
  const [profile, setProfile] = useState({});
  const user = getUserId();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProfileByUserId(user);
      setProfile(data);
    };
    fetchData();
  }, [user]);

  return (
    <StyledList>
      <StyledNavLink exact to="/">
        <IoLeafOutline />
        <h4>Home</h4>
      </StyledNavLink>

      <StyledNavLink to={`/profile/${profile.id}`}>
        <h4>Profile</h4>
      </StyledNavLink>
      <StyledNavLink to="/spots/new">
        <h4>New Spot</h4>
      </StyledNavLink>
    </StyledList>
  );
}
export const StyledList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0rem;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  transform: scale(0.8);
  z-index: 1000;

  h4 {
    position: absolute;
    // top: 1.5rem;
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: #e07a5f;

    h4 {
      color: black;
    }
    svg {
      color: white;
    }
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

export default Nav;
