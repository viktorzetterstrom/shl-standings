import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import shlService from './shl-service';
import { lightTheme, darkTheme } from './style/theme';
import Header from './components/Header';
import Spinner from './components/Spinner';
import LeagueTable from './components/LeagueTable';

const activeTheme = lightTheme;
const AppContainer = styled.div`
  color: ${ props => props.primary };
  background-color: ${ props => props.secondary };
  margin: 0 auto;
  text-align: center;
  min-height: 300px;
  @media (min-width: 610px) {
    width: 600px;
    margin-top: 20px;
    border: 0.5px solid ${ props => props.primary };
    border-radius: 5px;
    box-shadow: 0 0 25px rgba(0, 0, 0, .25);
  }
`;

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
          : <Spinner />
      }
    </AppContainer>
  );
}

export default App;
