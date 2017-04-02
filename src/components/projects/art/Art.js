import React, { Component } from 'react'
import { Card, Container, Divider, Loader } from 'semantic-ui-react'
import ArtCard from './ArtCard'

const api = 'https://www.mattailes.net/art/images'

export default class Art extends Component {

  state = {
    artArray: [],
    loading: true
  }

  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ artArray: data, loading: false }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <Container fluid>
        {this.state.loading ? <Loader active /> : null}
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
