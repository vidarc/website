import { ReasonReactEntry } from '@mattailes/reason'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

const Home: React.SFC<RouteComponentProps> = () => (
  <div>
    <p id='welcome-text'>Hello everybody! My name is Matthew Ailes. This is the home screen.</p>
    <ReasonReactEntry />
  </div>
)

export default Home
