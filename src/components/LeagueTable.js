import React from 'react';
import styled from 'styled-components';

function LeagueTableHead() {
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

function LeagueTableRow({ team }) {
  return (
    <tr>
      <td><img src={team.logo} alt={`${team.name} logotyp`} /></td>
      <td>{team.name}</td>
      <td>{team.gp}</td>
      <td>{team.diff}</td>
      <td>{team.points}</td>
    </tr>
  )
}

const LeagueTableContainer = styled.table`
  color: ${ props => props.primary };
  background-color: ${ props => props.secondary };
  margin: 20px auto;
  width: 95%;
  min-width: 320px;
  max-width: 600px;
`;

export default function LeagueTable({ standings, theme }) {
  return (
    <LeagueTableContainer {...theme}>
      <LeagueTableHead />
      <tbody>
        {
          standings.map((team, i) => <LeagueTableRow key={i} team={team} theme={theme} />)
        }
      </tbody>
    </LeagueTableContainer>
  )
}
