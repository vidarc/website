import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image, List } from 'semantic-ui-react'

const LinkList = props => (
  <List.Item>
    <Image avatar src={props.image} />
    <List.Content>
      <Link to={props.path}>{props.description}</Link>
    </List.Content>
  </List.Item>
)
export default LinkList

LinkList.propTypes = {
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
