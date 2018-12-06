import styled from '@emotion/styled/macro'

interface Props {
  direction: 'column' | 'row'
}
const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
`

export default FlexContainer
