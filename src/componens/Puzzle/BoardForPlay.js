import React from 'react'

class BoardForPlay extends React.Component {
  render() {
    const { dropCellImg } = this.props

    const styles = {
      border: '1px solid black',
    }

    return (
      <div style={styles} className="cell" onMouseUp={dropCellImg.bind(this)} />
    )
  }
}

export default BoardForPlay
