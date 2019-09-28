import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;


const Spinner = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  border: 5px solid black;
  border-bottom: 5px solid rgba(0, 0, 0, 0);
  border-left: 5px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

export default Spinner;
