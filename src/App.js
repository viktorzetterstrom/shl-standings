import React, { useState, useEffect } from 'react';
import shlService from './shl-service';
import { lightTheme } from './style/theme';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Spinner from './components/Spinner';
import LeagueTable from './components/LeagueTable';
import Footer from './components/Footer';

const activeTheme = lightTheme;

function App() {
  const [standings, setStandings] = useState({ loading: true })

  useEffect(() => {
    shlService.standings()
      .then(res => setStandings(res.data))
      .catch(err => console.error(`Error fetching standings: ${err}`));
  }, []);

  return (
    <AppContainer>
      <Header theme={ activeTheme } />
        {
        !standings.loading
          ? <LeagueTable standings={ standings } theme={ activeTheme } />
          : <Spinner theme={ activeTheme }/>
        }
        <Footer />
    </AppContainer>
  );
}

export default App;
