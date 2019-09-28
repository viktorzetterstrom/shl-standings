import React, { useState, useEffect } from 'react';
import './App.css';
import shlService from './shl-service';
import LeagueTable from './components/LeagueTable';
import Spinner from './components/Spinner';

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
          : <Spinner />
      }
    </div>
  );
}

export default App;
