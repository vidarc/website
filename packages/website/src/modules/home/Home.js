// @flow

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div>Hello everybody! My name is Matthew Ailes</div>
    <ul>
      <li>
        <Link to='/todo'>Todo App from redux.js.org</Link>
      </li>
      <li>
        <Link to='/starwars'>Star Wars app with a GraphQL wrapper around swapi</Link>
      </li>
    </ul>
  </div>
)

export default Home
