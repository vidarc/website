import * as React from 'react'

import styled from '@emotion/styled'
import { Link } from '@reach/router'

const StyledLink = styled(Link)`
  color: blue;

  &:visited {
    color: blue;
  }
`

const DisplayArray = ({ array, url }) =>
  array
    .map(({ id, name, title }) => (
      <StyledLink to={url + id} key={id}>
        {name || title}
      </StyledLink>
    ))
    .reduce((prev, next) => (prev.length > 0 ? [prev, ', ', next] : [next]), [])

export default DisplayArray
