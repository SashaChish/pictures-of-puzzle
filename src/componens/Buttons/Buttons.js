import React from 'react'
import PropTypes from 'prop-types'

class Buttons extends React.Component {
  render() {
    const { clearCellPuzzle } = this.props

    return (
      <div className="button-box">
        <button
          type="button"
          className="button"
          onMouseUp={clearCellPuzzle}
          onMouseDown={clearCellPuzzle}
        >
          Clear Boards
        </button>
      </div>
    )
  }
}

Buttons.propTypes = {
  clearCellPuzzle: PropTypes.func.isRequired,
}

export default Buttons
