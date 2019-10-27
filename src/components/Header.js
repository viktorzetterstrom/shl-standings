import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const HeaderLink = styled(NavLink)`
  :active {
    color: hotpink;
  }
`;

const HeaderWrapper = styled.div`
  color: ${ props => props.secondary };
  background-color: ${ props => props.primary };
  font-size: 28px;
  font-weight: 500;
  padding: 5px 0;
`;

export default function Headers({ theme }) {
  return (
    <HeaderWrapper {...theme}>
      <HeaderLink to="/standings">Standings</HeaderLink>
      <HeaderLink to="/games">Games</HeaderLink>
    </HeaderWrapper>
  );
}
