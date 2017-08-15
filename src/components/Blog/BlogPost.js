// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { Header, Segment } from 'semantic-ui-react'

const BlogPost = ({ title, date, body }) =>
  (<Segment color='blue'>
    <Header content={title} subheader={date} />
    <p>
      {body}
    </p>
  </Segment>)

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default BlogPost
