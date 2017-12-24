import logger from './../logger'

const resolvers = {
  Query: {
    allLinks: async (root, data, { mongo: { Links } }) => Links.find({}).toArray(),
  },

  Mutation: {
    createLink: async (root, data, { mongo: { Links }, user }) => {
      const newLink = Object.assign({ postedById: user && user._id }, data)
      const response = await Links.insert(newLink)
      return Object.assign({ id: response.insertedIds[0] }, newLink)
    },

    createUser: async (root, data, { mongo: { Users } }) => {
      const newUser = {
        name: data.name,
        email: data.authProvider.email.email,
        password: data.authProvider.email.password,
      }

      const response = await Users.insert(newUser)
      return Object.assign({ id: response.insertedIds[0] }, newUser)
    },

    signinUser: async (root, data, { mongo: { Users } }) => {
      const user = await Users.findOne({ email: data.email.email })
      logger.info('sining in with: ', user)
      logger.info('credentials: ', data)
      if (data.email.password === user.password) {
        return { token: `token-${user.email}`, user }
      }
      return {}
    },
  },

  Link: {
    id: root => root._id || root.id,

    postedBy: async ({ postedById }, data, { mongo: { Users } }) => Users.findOne({ _id: postedById }),
  },

  User: {
    id: root => root._id || root.id,
  },
}
export default resolvers
