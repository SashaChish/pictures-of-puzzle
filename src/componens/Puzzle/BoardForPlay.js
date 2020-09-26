import React from 'react'
import PropTypes from 'prop-types'

class BoardForPlay extends React.Component {
  fokus = e => {
    e.preventDefault()
    e.target.classList.add('cell-fokus')
  }

  outFokus = e => e.target.classList.remove('cell-fokus')

  render() {
    const { id, dropCell, takeCell, switchCell, clearBoard } = this.props
    const voidURL = 'none'

    const styles = {
      border: '1px solid rgb(116, 64, 64)',
      backgroundImage: clearBoard ? voidURL : null,
    }

    return (
      <div
        style={styles}
        className="cell"
        onClick={dropCell}
        onMouseDown={takeCell.bind(null, id)}
        onMouseUp={switchCell.bind(null, id)}
        onMouseOver={this.fokus}
        onMouseOut={this.outFokus}
      />
    )
  }
}

BoardForPlay.propTypes = {
  id: PropTypes.number.isRequired,
  dropCell: PropTypes.func.isRequired,
  takeCell: PropTypes.func.isRequired,
  switchCell: PropTypes.func.isRequired,
  clearBoard: PropTypes.bool.isRequired,
}

export default BoardForPlay
