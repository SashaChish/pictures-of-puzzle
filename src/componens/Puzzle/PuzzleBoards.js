import React from 'react'
import BoardShuffle from './BoardShuffle'
import Loader from '../Loader/Loader'
import BoardForPlay from './BoardForPlay'
import Buttons from '../Buttons/Buttons'

class PuzzleBoards extends React.Component {
  render() {
    const { values, takeCellImg, dropCellImg, clearCellPuzzle } = this.props

    return (
      <div className="container-boards">
        <div className="shuffled-puzzles">
          {values.targetURL ? (
            values.options.map(option => (
              <BoardShuffle
                key={option.id}
                url={values.targetURL}
                takeCellImg={takeCellImg}
                options={option}
              />
            ))
          ) : (
            <div className="loader">
              <h2>Click on the picture to complete the puzzle</h2>
              <Loader />
            </div>
          )}
        </div>

        <Buttons clearCellPuzzle={clearCellPuzzle.bind(this)} />
        <div>
          <h2>Game board</h2>
          <div className="board-for-images">
            {values.options.map((option, index) => (
              <BoardForPlay key={option.id} dropCellImg={dropCellImg} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default PuzzleBoards
