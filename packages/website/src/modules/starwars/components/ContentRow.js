// @flow

import * as React from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  display: flex;
`

const Item = styled('div')`
  flex: 1 1 100%;
  max-width: ${props => props.width};
`

export default ({
  title,
  children,
}: {
  title: string,
  children: React.Node
}) => (
  <Container>
    <Item width='25%'>{title}</Item>
    <Item width='75%'>{children}</Item>
  </Container>
)
