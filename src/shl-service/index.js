
const shlService = {
  standings: () => fetch('/api/standings').then(res => res.json()),
}

export default shlService;
