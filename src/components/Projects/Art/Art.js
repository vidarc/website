import React, { Component } from 'react'
import { Card, Container, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import * as artActions from '../../actions/artActions'
import ArtCard from './ArtCard'
import './Art.css'

class Art extends Component {
  componentDidMount() {
    // fetch(api)
    //   .then(response => response.json())
    //   .then(data => this.setState({ artArray: data, loading: false }))
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <Container className='artContainer'>
        {/* <Loader active={loading} content='Loading the Art' /> */}
        <Card.Group className='cardGroup'>
          {this.props.randomArtCollection.map(art => <ArtCard key={art.id} art={art} />)}
        </Card.Group>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    randomArtCollection: state.randomArtCollection,
  }
}

export default connect(mapStateToProps)(Art)
