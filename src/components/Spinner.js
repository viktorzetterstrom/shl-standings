import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 140px;
  margin: 140px auto;
`;

const SpinnerPart = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 20px solid rgba(0, 0, 0, 0);
  border-top: 20px solid black;
  border-radius: 50%;
  animation: ${rotate} ${props => props.theme.speed} linear infinite;
`;

export default function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerPart theme={{ speed: "1s" }} />
      <SpinnerPart theme={{ speed: "1.5s" }} />
      <SpinnerPart theme={{ speed: "3s" }} />
    </SpinnerContainer>
  )
}