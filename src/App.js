import React, { useState, useEffect } from 'react';
import './App.css';
import shlService from './shl-service';

function App() {
  const [standings, setStandings] = useState({ loading: true })

  useEffect(() => {
    shlService.standings()
      .then(setStandings)
      .catch(err => console.error(`Error fetching standings: ${err}`));
  }, []);

  return (
    <div className="App">
      {
        !standings.loading
          ? standings.data.map((team, i) => <div key={i}>{team.team.code}</div>)
          : <div>spinner</div>
      }
    </div>
  );
}

export default App;
