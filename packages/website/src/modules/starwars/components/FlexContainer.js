// @flow

import styled from 'react-emotion'

const FlexContainer = styled('div')`
  display: flex;
  flex-direction: ${props => props.direction};
`

export default FlexContainer
