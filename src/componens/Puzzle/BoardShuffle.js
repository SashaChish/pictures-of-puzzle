import React from 'react'
import PropTypes from 'prop-types'

class BoardShuffle extends React.Component {
  render() {
    const {
      url,
      id,
      options: {
        item: { position },
      },
      takeCell,
    } = this.props

    const styles = {
      backgroundImage: url,
      backgroundPosition: position,
    }

    return (
      <div className="cell" style={styles} onClick={takeCell.bind(null, id)} />
    )
  }
}

BoardShuffle.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  position: PropTypes.string,
  takeCell: PropTypes.func.isRequired,
}

export default BoardShuffle
