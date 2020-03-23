import * as React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
`

interface ItemProps {
  width: string
}
const Item = styled.div<ItemProps>`
  flex: 1 1 100%;
  max-width: ${(props) => props.width};
`

const ContentRow: React.FunctionComponent<{ title: string }> = ({ title, children }) => (
  <Container>
    <Item width="25%">{title}</Item>
    <Item width="75%">{children}</Item>
  </Container>
)

ContentRow.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ContentRow
