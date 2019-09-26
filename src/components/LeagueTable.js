import React from 'react';
import styled from 'styled-components';

export default function LeagueTable({ standings }) {
  return (
    <table>
      <LeagueTableHead />
      <tbody>
        {
          standings.map((team, i) => <LeagueTableRow key={i} data={team} />)
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
        <th>Poäng</th>
      </tr>
    </thead>
  );
}

function LeagueTableRow({ data }) {
  return (
    <tr>
      <td><img src={data.logo} alt={`${data.name} logotyp`} /></td>
      <td>{data.name}</td>
      <td>{data.points}</td>
    </tr>
  )
}
