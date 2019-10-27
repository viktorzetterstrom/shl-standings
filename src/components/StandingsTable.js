import React from 'react';
import TeamLogo from './TeamLogo';
import TableContainer from './TableContainer';

const StandingsTableHead = () => (
    <thead>
      <tr>
        <th></th>
        <th>Team</th>
        <th>GP</th>
        <th>+/-</th>
        <th>Points</th>
      </tr>
    </thead>
);


const StandingsTableRow = ({ team }) => (
  <tr>
    <td><TeamLogo src={team.logo} name={team.name} /></td>
    <td>{team.name}</td>
    <td>{team.gp}</td>
    <td>{team.diff}</td>
    <td>{team.points}</td>
  </tr>
);


export default ({ standings, theme }) => (
  <TableContainer {...theme}>
    <StandingsTableHead />
    <tbody>
      {
        standings.map((team, i) => <StandingsTableRow key={i} team={team} theme={theme} />)
      }
    </tbody>
  </TableContainer>
);

