import React, { useState, useEffect } from 'react';
import shlService from './shl-service';
import { lightTheme } from './style/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Spinner from './components/Spinner';
import StandingsTable from './components/StandingsTable';
import Games from './components/Games';
import Footer from './components/Footer';

const activeTheme = lightTheme;

function App() {
  const [standings, setStandings] = useState({ loading: true });
  const [games, setGames] = useState({ loading: true });

  useEffect(() => {
    shlService.standings()
      .then(res => setStandings(res.data))
      .catch(err => console.error(`Error fetching standings: ${err}`));
  }, []);

  useEffect(() => {
    shlService.games()
      .then(res => setGames(res.data))
      .catch(err => console.error(`Error fetching games: ${err}`));
  }, []);

  return (
    <Router>
    <AppContainer>
      <Header theme={ activeTheme } />
        <Switch>
          <Route path="/standings">
            {
            !standings.loading
              ? <StandingsTable standings={ standings } theme={ activeTheme } />
              : <Spinner theme={ activeTheme }/>
            }
          </Route>
          <Route path="/games">
            {
            !games.loading
              ? <Games games={ games } theme={ activeTheme } />
              : <Spinner theme={ activeTheme }/>
            }
          </Route>
          <Route path="/">
            <Redirect to="/standings" />
          </Route>
        </Switch>
      <Footer />
    </AppContainer>
    </Router>
  );
}

export default App;
