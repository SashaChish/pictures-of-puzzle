import React from 'react'

class Slide extends React.Component {
  render() {
    const { url, id, title, changeImg } = this.props

    if (url) {
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
    } else return
  }
}

export default Slide
