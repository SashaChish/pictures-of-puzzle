import React from 'react'

class BoardForPlay extends React.Component {
  fokus = e => {
    e.preventDefault()
    e.target.classList.add('cell-fokus')
  }
  outFokus = e => e.target.classList.remove('cell-fokus')

  render() {
    const { id, dropCellImg, takeCell, switchCell, clearBoard } = this.props
    const voidURL = 'url("")'

    const styles = {
      border: '1px solid rgb(116, 64, 64)',
      backgroundImage: clearBoard ? voidURL : null,
    }

    return (
      <div
        style={styles}
        className="cell"
        onClick={dropCellImg.bind(null)}
        onMouseDown={takeCell.bind(null, id)}
        onMouseUp={switchCell.bind(null, id)}
        onMouseOver={this.fokus}
        onMouseOut={this.outFokus}
      />
    )
  }
}

export default BoardForPlay
