import React, { Component } from 'react'
import { Card, Container, Divider } from 'semantic-ui-react'
import ArtCard from './ArtCard'

const api = 'https://www.mattailes.net/art/images'

export default class Art extends Component {

  state = {
    artArray: []
  }

  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ artArray: data }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <Container fluid>
        <Divider />
        <Card.Group>
          {this.state.artArray.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </Card.Group>
      </Container>
    )
  }
}
