
const apiUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'https://api.zetterstrom.dev';

const shlService = {
  standings: () => fetch(`${apiUrl}/standings`).then(res => res.json()),
  games: () => fetch(`${apiUrl}/games`).then(res => res.json()),
}

export default shlService;
