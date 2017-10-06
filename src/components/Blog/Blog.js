// @flow

import React, { Component } from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import moment from 'moment'
import { BlogPost } from './'

type State = {
  loading: boolean,
}

export default class Blog extends Component<void, void, State> {
  state: State

  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  render() {
    const posts = [
      {
        id: 1,
        date: moment().format('MMMM Do YYYY'),
        title: 'Test Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 2,
        date: moment().format('MMMM Do YYYY'),
        title: 'Test Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 3,
        date: moment().format('MMMM Do YYYY'),
        title: 'Test Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 4,
        date: moment().format('MMMM Do YYYY'),
        title: 'Test Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 5,
        date: moment().format('MMMM Do YYYY'),
        title: 'Test Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ]

    if (this.state.loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader inverted size="huge" content="Loading the Blog" />
          </Dimmer>
        </Segment>
      )
    } else {
      return (
        <div>
          {posts.map(post => (
            <BlogPost key={post.id} title={post.title} date={post.date} body={post.body} />
          ))}
        </div>
      )
    }
  }
}
