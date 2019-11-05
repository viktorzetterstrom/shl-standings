
const apiUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'https://api.zetterstrom.dev';

const shlService = {
  standings: () => fetch(`${apiUrl}/standings`).then(res => res.json()),
  games: () => fetch(`${apiUrl}/games`).then(res => res.json()),
  goalies: () => fetch(`${apiUrl}/goalies`).then(res => res.json()),
  players: () => fetch(`${apiUrl}/players`).then(res => res.json()),
}

export default shlService;
