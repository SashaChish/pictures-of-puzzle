import React from 'react'

class Buttons extends React.Component {
  render() {
    const { clearCellPuzzle } = this.props

    return (
      <div className="button-box">
        <button className="button" onClick={clearCellPuzzle.bind(this)}>
          Clear Board
        </button>
      </div>
    )
  }
}

export default Buttons
