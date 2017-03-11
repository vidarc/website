import React from 'react'
import {
  Header,
  Segment
} from 'semantic-ui-react'

const BlogPost = (props) => {
  return (
    <Segment color='blue'>
      <Header content={props.post.title} subheader={props.post.date} />
      <p>{props.post.body}</p>
    </Segment>
  )
}

export default BlogPost
