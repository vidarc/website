export const Query = `
  type Query { people: [People] }
`

export const People = `
  type People {
    name: String
  }
`

const schema = `
  ${Query}
  ${People}
`
export default schema
