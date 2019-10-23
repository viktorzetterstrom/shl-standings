
const shlService = {
  standings: () => fetch('https://api.zetterstrom.dev/standings').then(res => res.json()),
}

export default shlService;
