import React from 'react'
import PropTypes from 'prop-types'

const style = {
  fontWeight: 'bold',
}

const ArtInfo = ({ title, content }) =>
  (content ? (
    <div>
      <span style={style}>{title}: </span>
      {content}
    </div>
  ) : null)
export default ArtInfo

ArtInfo.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
}

ArtInfo.defaultProps = {
  content: null,
  title: null,
}
