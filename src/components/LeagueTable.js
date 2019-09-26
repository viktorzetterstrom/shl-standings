import React from 'react';
import LeagueTableRow from './LeagueTableRow';


export default function LeagueTable({ standings }) {
  return (
    <div>
      {
        standings.map((team, i) => <LeagueTableRow key={i} data={team}/>)
      }
    </div>
  )
}