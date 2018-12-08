import * as React from 'react'

import styled from '@emotion/styled'
import { RouteComponentProps } from '@reach/router'

import QueryPages from './containers/QueryPages'
import TabLink from './components/TabLink'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;

  & a {
    padding: 10px;
    color: royalblue;
    border-color: #000000;
    border-style: solid;

    &.active {
      border-width: 1px 1px 0 1px;
      border-radius: 5px 5px 0 0;
    }

    &:not(.active) {
      border-width: 0 0 1px 0;
    }
  }
`

const StarWarsApp: React.SFC<RouteComponentProps> = () => (
  <div>
    <h1>Star Wars Database (based on swapi.com)</h1>
    <Wrapper>
      <TabLink to='film'>Random Film</TabLink>
      <TabLink to='person'>Random Character</TabLink>
      <TabLink to='planet'>Random Planet</TabLink>
      <TabLink to='species'>Random Species</TabLink>
      <TabLink to='starship'>Random Starship</TabLink>
      <TabLink to='vehicle'>Random Vehicle</TabLink>
    </Wrapper>
    <QueryPages />
  </div>
)

export default StarWarsApp
