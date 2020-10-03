import React from 'react'
import PropTypes from 'prop-types'

class Buttons extends React.Component {
  render() {
    const { perPage, clearCellPuzzle, morePictures } = this.props

    const disabled = perPage <= 100 ? false : true

    return (
      <div className="button-box">
        <button type="button" className="button" onClick={clearCellPuzzle}>
          Clear Boards
        </button>
        <button
          type="button"
          className="button"
          onClick={morePictures}
          disabled={disabled}
        >
          More Pictures
        </button>
      </div>
    )
  }
}

Buttons.propTypes = {
  perPage: PropTypes.number.isRequired,
  clearCellPuzzle: PropTypes.func.isRequired,
  morePictures: PropTypes.func.isRequired,
}

export default Buttons
