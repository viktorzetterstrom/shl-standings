
const shlService = {
  standings: () => fetch('/standings').then(res => res.json()),
}

export default shlService;
