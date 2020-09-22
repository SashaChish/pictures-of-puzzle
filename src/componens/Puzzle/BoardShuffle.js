import React from 'react'

class BoardShuffle extends React.Component {
  render() {
    const { url, options, takeCellImg } = this.props

    const styles = {
      backgroundImage: url,
      backgroundPosition: options.position,
    }

    return (
      <div
        className="cell"
        style={styles}
        onMouseDown={takeCellImg.bind(this)}
      />
    )
  }
}

export default BoardShuffle
