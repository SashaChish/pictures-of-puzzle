import React from 'react'

class BoardShuffle extends React.Component {
  render() {
    const {
      url,
      id,
      options: {
        item: { position },
      },
      takeCellImg,
    } = this.props
    const styles = {
      backgroundImage: url,
      backgroundPosition: position,
    }

    return (
      <div
        className="cell"
        style={styles}
        onClick={takeCellImg.bind(null, id)}
      />
    )
  }
}

export default BoardShuffle
