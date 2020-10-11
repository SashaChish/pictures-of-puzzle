import React from 'react'
import PropTypes from 'prop-types'

import CellShuffle from './CellShuffle'
import CellForPlay from './CellForPlay'
import Loader from '../Loader/Loader'
import Buttons from '../Buttons/Buttons'

class PuzzleBoards extends React.Component {
  render() {
    const {
      values: { targetURL, perPage, options, shuffleOptions },
      takeCellImg,
      dropCellImg,
      takeCellGameBoard,
      switchCellGameBoard,
      clearCellPuzzle,
      morePictures,
    } = this.props

    const shuffledSize = {
      width: shuffleOptions.length <= 6 ? '600px' : '750px',
      height: shuffleOptions.length <= 4 ? '400px' : '470px',
    }

    return (
      <div className="container-boards">
        <div className="shuffled-puzzles" style={shuffledSize}>
          {targetURL.image ? (
            shuffleOptions.map(option => (
              <CellShuffle
                key={option.id}
                id={option.id}
                url={targetURL.image}
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
        {targetURL.image && (
          <Buttons
            perPage={perPage}
            clearCellPuzzle={clearCellPuzzle}
            morePictures={morePictures}
          />
        )}
        {targetURL.image && (
          <div>
            <h2>Game board</h2>
            <div className="board-for-play">
              {options.map((option, index) => (
                <CellForPlay
                  url={targetURL.image}
                  index={index}
                  key={option.id}
                  option={option}
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
