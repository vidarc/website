import React from 'react'
import { Header, Icon, List } from 'semantic-ui-react'

const LeftSide = () => {
  return (
    <div>
      <Header sub dividing inverted>
        <Icon name='users' />
        <Header.Content>
          Some stuff will go here
        </Header.Content>
      </Header>
      <List>
        <List.Item icon='user' content='Some Info about me' />
        <List.Item icon='google' content='Some more info about me' />
      </List>
    </div>
  )
}

export default LeftSide
