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
import StandingsTable from './components/tables/StandingsTable';
import GamesTable from './components/tables/GamesTable';
import GoaliesTable from './components/tables/GoaliesTable';
import Footer from './components/Footer';

const activeTheme = lightTheme;

function App() {
  return (
    <Router>
    <AppContainer>
      <Header theme={ activeTheme } />
        <Switch>
          <Route path="/standings">
            <StandingsTable theme={ activeTheme } />
          </Route>
          <Route path="/games">
            <GamesTable theme={ activeTheme } />
          </Route>
          <Route path="/statistics/goalies">
            <GoaliesTable theme={ activeTheme } />
          </Route>
          <Route path="/statistics/players">

          </Route>
          <Route path="/statistics">
            <Redirect to="/statistics/goalies" />
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
