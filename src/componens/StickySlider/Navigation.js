import React from 'react'
import PropTypes from 'prop-types'

function Navigation(props) {
  const { start, current, end } = props

  return (
    <div className="swiper-button-container">
      <button type="button" className="button-swiper" onClick={start}>
        Start
      </button>
      <button type="button" className="button-swiper" onClick={current}>
        Current
      </button>
      <button type="button" className="button-swiper" onClick={end}>
        End
      </button>
    </div>
  )
}

Navigation.propTypes = {
  start: PropTypes.func.isRequired,
  current: PropTypes.func.isRequired,
  end: PropTypes.func.isRequired
}

export default Navigation