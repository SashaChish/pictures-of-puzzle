import React from 'react'
import ItemShuffle from './ItemShuffle'
import Loader from '../Loader/Loader'

class PuzzleShuffle extends React.Component {
  render() {
    const { values } = this.props
    return (
      <div className="shuffled-puzzles">
        {values.targetURL ? (
          values.options.map(option => (
            <ItemShuffle
              key={option.id}
              url={values.targetURL}
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
    )
  }
}

export default PuzzleShuffle
