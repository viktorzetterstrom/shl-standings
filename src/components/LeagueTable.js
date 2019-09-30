import React from 'react';
import styled from 'styled-components';

export default function LeagueTable({ standings }) {
  return (
    <table>
      <LeagueTableHead />
      <tbody>
        {
          standings.map((team, i) => <LeagueTableRow key={i} team={team} />)
        }
      </tbody>
    </table>
  )
}

function LeagueTableHead() {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Lag</th>
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
      <td>{team.diff}</td>
      <td>{team.points}</td>
    </tr>
  )
}
