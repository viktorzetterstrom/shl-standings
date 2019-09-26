import React, { useState, useEffect } from 'react';
import './App.css';
import shlService from './shl-service';
import LeagueTable from './components/LeagueTable';

function App() {
  const [standings, setStandings] = useState({ loading: true })

  useEffect(() => {
    shlService.standings()
      .then(res => setStandings(res.data))
      .catch(err => console.error(`Error fetching standings: ${err}`));
  }, []);

  return (
    <div className="App">
      {
        !standings.loading
          ? <LeagueTable standings={ standings }/>
          : <div>spinner</div>
      }
    </div>
  );
}

export default App;
