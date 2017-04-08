import React from 'react'

const style = {
  fontWeight: 'bold'
}

export const ArtInfo = (props) =>
  props.content
    ? <div><span style={style}>{props.title}: </span>{props.content}</div>
    : null
