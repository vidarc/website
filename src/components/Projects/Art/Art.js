import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Container, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loadRandomArt } from '../../../actions/artActions'
import ArtCard from './ArtCard'
import './Art.css'

class Art extends Component {
  componentDidMount() {
    this.props.dispatch(loadRandomArt())
  }

  render() {
    return (
      <Container className='artContainer'>
        <Loader active={this.props.collection.length === 0} content='Loading the Art' />
        <Card.Group className='cardGroup'>
          {this.props.collection.map(art => <ArtCard key={art.object_id} art={art} />)}
        </Card.Group>
      </Container>
    )
  }
}

Art.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    object_id: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    artist_bio: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    medium: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state, props) {
  return {
    collection: state.randomArt.collection,
  }
}

export default connect(mapStateToProps)(Art)
