import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { LeftSide, RightSide } from './'

const Footer = () => {
  return (
    <Segment inverted color='blue' secondary>
      <Grid stackable columns={4}>
        <Grid.Column />
        <Grid.Column>
          <LeftSide />
        </Grid.Column>
        <Grid.Column>
          <RightSide />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    </Segment>
  )
}

export default Footer
