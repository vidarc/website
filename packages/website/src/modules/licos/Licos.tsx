import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from '@emotion/styled'

import logo from './logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    align-self: center;
  }
`

const Card = styled.div`
  display: flex;
  margin: 0.875em 0.5em;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  width: calc(100% / 3);
`

interface Props extends RouteComponentProps {}

const Licos: React.FC<Props> = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <input placeholder="Search..." />
      <Card>
        <div>
          <h3 style={{ marginBottom: '0' }}>Matthew Ailes</h3>
          <div>Principal Associate Software Engineer</div>
          <div>Reports To:</div>
          <div>
            Direct Reports:
            <ul>
              <li>Some Name</li>
              <li>Some Name</li>
              <li>Some Name</li>
              <li>Some Name</li>
              <li>Some Name</li>
            </ul>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Licos
