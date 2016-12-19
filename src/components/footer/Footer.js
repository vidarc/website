import React, { Component } from 'react'
import {
  Button,
  Grid,
  Header,
  Icon,
  List,
  Segment
} from 'semantic-ui-react'

export default class Footer extends Component {

  render() {
    let socials = [
      { key: 1, name: 'facebook', link: 'https://www.facebook.com/mattailes' },
      { key: 2, name: 'google plus', link: 'https://plus.google.com/u/0/104160854902939371173' },
      { key: 3, name: 'lastfm', link: 'http://www.last.fm/user/vidarc' },
      { key: 4, name: 'linkedin', link: 'https://www.linkedin.com/in/mattailes' },
      { key: 5, name: 'twitter', link: 'https://twitter.com/mattailes' }
    ]

    return(
      <Segment inverted color='blue' secondary>
        <Grid stackable columns={4}>
          <Grid.Column />
          <Grid.Column>
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
          </Grid.Column>
          <Grid.Column>
            <Header sub dividing inverted>
              <Icon name='users' />
              <Header.Content>
                Connect With Me
              </Header.Content>
            </Header>
            {socials.map((social) =>
              <Button key={social.key} color={social.name} circular icon={social.name} />
            )}
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </Segment>
    )
  }
}
