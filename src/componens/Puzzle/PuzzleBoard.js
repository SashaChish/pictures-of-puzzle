import React from 'react'
import BoardCell from './BoardCell'

class PuzzleBoard extends React.Component {
  render() {
    const { values } = this.props

    return (
      <div className="board-for-images">
        {values.options.map(option => (
          <BoardCell key={option.id} url={values.targetURL} options={option} />
        ))}
      </div>
    )
  }
}

export default PuzzleBoard
