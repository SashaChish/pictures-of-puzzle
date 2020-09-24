import React from 'react'
import BoardShuffle from './BoardShuffle'
import Loader from '../Loader/Loader'
import BoardForPlay from './BoardForPlay'
import Buttons from '../Buttons/Buttons'

class PuzzleBoards extends React.Component {
  render() {
    const {
      values,
      takeCellImg,
      dropCellImg,
      takeCellGameBoard,
      switchCellGameBoard,
      clearCellPuzzle,
    } = this.props

    return (
      <div className="container-boards">
        <div className="shuffled-puzzles">
          {values.targetURL ? (
            values.shuffleOptions.map(option => (
              <BoardShuffle
                key={option.id}
                id={option.id}
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
        <Buttons clearCellPuzzle={clearCellPuzzle} />
        <div>
          <h2>Game board</h2>
          <div className="board-for-images">
            {values.options.map(option => (
              <BoardForPlay
                key={option.id}
                id={option.id}
                clearBoard={values.clearBoard}
                dropCellImg={dropCellImg}
                takeCell={takeCellGameBoard}
                switchCell={switchCellGameBoard}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default PuzzleBoards
