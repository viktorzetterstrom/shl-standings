import React from 'react';
import TeamLogo from './TeamLogo';
import TableContainer from './TableContainer';

const GamesTableHead = () => (
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Home</th>
      <th>Away</th>
      <th>Result</th>
    </tr>
  </thead>
);

const formatGameDate = (date) => new Date(date).toLocaleDateString('sv-SE');
const formatGameTime = (date) => new Date(date).toLocaleTimeString('sv-SE').slice(0, -3);
const displayResult = (game) => new Date(game.start_date_time) < new Date()
  ? `${game.home_team_result} - ${game.away_team_result}`
  : '-';

const GamesTableRow = ({ game }) => (
  <tr>
    <td>{formatGameDate(game.start_date_time)}</td>
    <td>{formatGameTime(game.start_date_time)}</td>
    <td><TeamLogo src={game.home_team_logo} name={game.home_team_name} /></td>
    <td><TeamLogo src={game.away_team_logo} name={game.away_team_name} /> </td>
    <td>{displayResult(game)}</td>
  </tr>
);

export default ({ games, theme }) => (
  <TableContainer {...theme}>
    <GamesTableHead />
    <tbody>
      {
        games.map((game, i) => <GamesTableRow key={i} game={game} theme={theme} />)
      }
    </tbody>
  </TableContainer>
);
