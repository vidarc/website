import React, { Component } from 'react'

export default class TestingContainer extends Component {

  renderBlog() {
    return this.props.blog.map((blog) => {
      return <li key={blog.title}>{blog.title} - {blog.body}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderBlog()}
        </ul>
      </div>
    )
  }
}
