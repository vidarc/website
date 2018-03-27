const typeDefs = require.context('./', true, /\/.*\/index\.js$/)

const requireAll = requireContext =>
  requireContext
    .keys()
    .map(requireContext)
    .map(context => [...context.default])
    .reduce((accumulator, value) => [...accumulator, ...value])

export default requireAll(typeDefs)
