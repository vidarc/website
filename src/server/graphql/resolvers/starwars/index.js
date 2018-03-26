import fetch from 'cross-fetch'

const resolvers = {
  Query: {
    people: async () =>
      fetch('https://swapi.co/api/people/')
        .then(response => response.json())
        .then(response => response.results),
  },
}
export default resolvers
