// @flow

import React from 'react'
import { Container, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => (
  <Container>
    <div>Hello everybody! My name is Matthew Ailes</div>
    <List bulleted>
      <List.Item>
        <Link to='/todo'>Todo App from redux.js.org</Link>
      </List.Item>
      <List.Item>
        <Link to='/starwars'>Star Wars app with a GraphQL wrapper around swapi</Link>
      </List.Item>
    </List>
  </Container>
)

export default Home
