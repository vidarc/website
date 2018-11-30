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

const ContentRow = ({
  title,
  children
}: {
  title: string,
  children: React.Node
}) => (
  <Container>
    <Item width='25%'>{title}</Item>
    <Item width='75%'>{children}</Item>
  </Container>
)

export default ContentRow
