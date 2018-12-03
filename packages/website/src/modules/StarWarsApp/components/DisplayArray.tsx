import * as React from 'react'

import styled from 'react-emotion'

import { Link } from '@reach/router'

interface Props {
  array: any[]
  url: string
}

const StyledLink = styled(Link)`
  color: blue;

  &:visited {
    color: blue;
  }
`

const DisplayArray = ({ array, url }): React.Component<Props> =>
  array
    .map(({ id, name, title }) => (
      <StyledLink to={url + id} key={id}>
        {name || title}
      </StyledLink>
    ))
    .reduce((prev, next) => (prev.length > 0 ? [prev, ', ', next] : [next]), [])

export default DisplayArray
