import React from 'react';
import styled from 'styled-components';

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
      SHL 2019
    </HeaderWrapper>
  );
}
