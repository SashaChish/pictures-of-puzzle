import React from 'react'
import PropTypes from 'prop-types'

class CellForPlay extends React.Component {

  fokus = e => {
    e.preventDefault()
    e.target.style.border = '1px solid red'
  }

  outFokus = e => e.target.style.border = null

  render() {
    const { option: {id, stylesCell}, index, dropCell, takeCell, switchCell,} = this.props
    
    return (
      <div
        className="cell border"
        style={stylesCell}
        onClick={dropCell.bind(null, id)}
        onMouseDown={takeCell.bind(null, index)}
        onMouseUp={switchCell.bind(null, index)}
        onMouseOver={this.fokus}
        onMouseOut={this.outFokus}
      />
    )
  }
}

CellForPlay.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.number.isRequired,
    item: PropTypes.object
  }),
  dropCell: PropTypes.func.isRequired,
  takeCell: PropTypes.func.isRequired,
  switchCell: PropTypes.func.isRequired,
}

export default CellForPlay
