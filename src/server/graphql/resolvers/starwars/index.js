const data = [{ name: 'Luke' }, { name: 'Leia' }, { name: 'Han' }]

const resolvers = {
  Query: { people: () => data },
}
export default resolvers
