import React from 'react';
import { lightTheme } from './style/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import StandingsTable from './components/StandingsTable';
import GamesTable from './components/GamesTable';
import Footer from './components/Footer';

const activeTheme = lightTheme;

function App() {
  return (
    <Router>
    <AppContainer>
      <Header theme={ activeTheme } />
        <Switch>
          <Route path="/standings">
            <StandingsTable />
          </Route>
          <Route path="/games">
            <GamesTable />
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
