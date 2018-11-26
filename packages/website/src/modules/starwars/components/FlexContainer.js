// @flow

import styled from 'react-emotion'

const FlexContainer = styled('div')`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
`

export default FlexContainer
