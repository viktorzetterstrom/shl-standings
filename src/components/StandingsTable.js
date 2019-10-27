import React from 'react';
import TeamLogo from './TeamLogo';
import styled from 'styled-components';

function StandingsTableHead() {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Lag</th>
        <th>GP</th>
        <th>+/-</th>
        <th>Poäng</th>
      </tr>
    </thead>
  );
}

function StandingsTableRow({ team }) {
  return (
    <tr>
      <td><TeamLogo src={team.logo} name={team.name} /></td>
      <td>{team.name}</td>
      <td>{team.gp}</td>
      <td>{team.diff}</td>
      <td>{team.points}</td>
    </tr>
  )
}

const StandingsTableContainer = styled.table`
  color: ${ props => props.primary };
  background-color: ${ props => props.secondary };
  margin: 20px auto 30px;
  width: 95%;
  min-width: 320px;
  max-width: 600px;
`;

export default function StandingsTable({ standings, theme }) {
  return (
    <StandingsTableContainer {...theme}>
      <StandingsTableHead />
      <tbody>
        {
          standings.map((team, i) => <StandingsTableRow key={i} team={team} theme={theme} />)
        }
      </tbody>
    </StandingsTableContainer>
  )
}
