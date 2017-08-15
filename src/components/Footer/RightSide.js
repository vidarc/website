import React from 'react'
import { Button, Header, Icon } from 'semantic-ui-react'

const socials = [
  { key: 1, name: 'facebook', link: 'https://www.facebook.com/mattailes' },
  { key: 2, name: 'google plus', link: 'https://plus.google.com/u/0/104160854902939371173' },
  { key: 3, name: 'lastfm', link: 'http://www.last.fm/user/vidarc' },
  { key: 4, name: 'linkedin', link: 'https://www.linkedin.com/in/mattailes' },
  { key: 5, name: 'twitter', link: 'https://twitter.com/mattailes' },
]

const RightSide = () =>
  (<div>
    <Header sub dividing inverted>
      <Icon name='users' />
      <Header.Content>Connect With Me</Header.Content>
    </Header>
    {socials.map(social =>
      (<Button
        key={social.key}
        color={social.name === 'lastfm' ? 'red' : social.name}
        circular
        icon={social.name}
      />),
    )}
  </div>)

export default RightSide
