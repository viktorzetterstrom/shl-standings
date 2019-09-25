import React, { useState, useEffect } from 'react';
import './App.css';
import shlService from './shl-service';

function App() {
  const [standings, setStandings] = useState({ loading: true })

  useEffect(() => {
    shlService.standings()
      .then(console.log)
      .catch(err => console.error(`Error fetching standings: ${err}`));
  }, []);

  return (
    <div className="App">
      {
        !standings.loading
          ? standings.data.map(team => <div>These pretzels are making me thirsty</div>)
          : <div>spinner</div>
      }
    </div>
  );
}

export default App;
