import React from 'react'
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

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
