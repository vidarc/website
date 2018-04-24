// @flow

import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => (
  <Container>
    <div>Hello everybody</div>
    <Link to='/todo'>Todo App from redux.js.org</Link>
    <Link to='/starwars'>Star Wars app with a GraphQL wrapper around swapi</Link>
  </Container>
)

export default Home
