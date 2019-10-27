import React from 'react';
import TeamLogo from './TeamLogo';

export default ({ games }) => (
  <div>
    {
      games.map((game) => (
        <div>
          <TeamLogo src={game.home_team_logo} name={game.home_team_name} /> 
          {game.home_team_name} -
          <TeamLogo src={game.away_team_logo} name={game.away_team_name} /> 
          {game.away_team_name} -
          {game.venue}
        </div>
      ))
    }
  </div>
)