import React from 'react'
import PropTypes from 'prop-types'

class Slide extends React.Component {
  render() {
    const { url, id, title, changeImg } = this.props

    return (
      <div className="container-sticky-slider">
        <div
          className="content-sticky-slider"
          onClick={changeImg.bind(null, id)}
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="footer-sticky-slider">{title}</div>
      </div>
    )
  }
}

Slide.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  changeImg: PropTypes.func.isRequired,
}

export default Slide
