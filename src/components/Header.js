import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const HeaderLink = styled(NavLink)`
  color: ${ props => props.secondary };
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  :active {
    transform: scale(0.95);
  }
  :visited {
    color: ${ props => props.secondary };
  }
`;

const HeaderWrapper = styled.div`
  color: ${ props => props.secondary };
  background-color: ${ props => props.primary };
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
`;

export default function Headers({ theme }) {
  return (
    <>
      <HeaderWrapper {...theme}>
        SHL 2019
      </HeaderWrapper>
      <HeaderWrapper {...theme}>
        <HeaderLink {...theme} to="/standings">Standings</HeaderLink>
        <HeaderLink {...theme} to="/games">Games</HeaderLink>
      </HeaderWrapper>
    </>
  );
}
