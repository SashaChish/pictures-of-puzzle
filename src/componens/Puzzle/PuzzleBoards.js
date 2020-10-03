import React from 'react'
import PropTypes from 'prop-types'

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
      morePictures,
    } = this.props

    const shuffledSize = {
      width: values.shuffleOptions.length <= 6 ? '600px' : '700px',
      height: values.shuffleOptions.length <= 4 ? '200px' : '470px',
    }

    return (
      <div className="container-boards">
        <div className="shuffled-puzzles" style={shuffledSize}>
          {values.targetURL ? (
            values.shuffleOptions.map(option => (
              <BoardShuffle
                key={option.id}
                id={option.id}
                url={values.targetURL}
                takeCell={takeCellImg}
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
        {values.targetURL && (
          <Buttons
            perPage={values.perPage}
            clearCellPuzzle={clearCellPuzzle}
            morePictures={morePictures}
          />
        )}
        {values.targetURL && (
          <div>
            <h2>Game board</h2>
            <div className="board-for-play">
              {values.options.map(option => (
                <BoardForPlay
                  key={option.id}
                  id={option.id}
                  dropCell={dropCellImg}
                  takeCell={takeCellGameBoard}
                  switchCell={switchCellGameBoard}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

PuzzleBoards.propTypes = {
  values: PropTypes.object.isRequired,
  morePictures: PropTypes.func.isRequired,
  takeCellImg: PropTypes.func.isRequired,
  dropCellImg: PropTypes.func.isRequired,
  takeCellGameBoard: PropTypes.func.isRequired,
  switchCellGameBoard: PropTypes.func.isRequired,
  clearCellPuzzle: PropTypes.func.isRequired,
}

export default PuzzleBoards
