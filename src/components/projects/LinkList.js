import React from 'react'
import { Link } from 'react-router-dom'
import { Image, List } from 'semantic-ui-react'

const LinkList = (props) => (
  <List.Item>
    <Image avatar src={props.link.image} />
    <List.Content>
      <Link to={props.link.path}>{props.link.description}</Link>
    </List.Content>
  </List.Item>
)

export default LinkList
