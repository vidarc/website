import React, { Component } from 'react'
import { Card, Container, Loader } from 'semantic-ui-react'
import ArtCard from './ArtCard'
import './Art.css'

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
      .catch(err => console.log(err))
  }

  render() {
    const { loading } = this.state

    return (
      <Container className='artContainer'>
        <Loader active={loading} content='Loading the Art' />
        <Card.Group className='cardGroup'>
          {this.state.artArray.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </Card.Group>
      </Container>
    )
  }
}
