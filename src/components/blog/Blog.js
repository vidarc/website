import React, { Component } from 'react'
import {
  Header,
  Segment
} from 'semantic-ui-react'
import Moment from 'moment'
import LoadingIpsum from '../../utils/LoadingIpsum'

export default class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    setTimeout(function() {
      this.setState({
        loading: false
      })
    }.bind(this), 2000)
  }

  render() {
    let posts = { date: Moment().format('MMMM Do YYYY'),
                  title: 'Test Title',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }

    if (this.state.loading) {
      return <LoadingIpsum times='2' />
    }
    else {
      return(
        <Segment piled color='blue'>
          <Header as='h2' content={posts.title} subheader={posts.date} />
          <p>{posts.body}</p>
        </Segment>
      )
    }
  }
}
