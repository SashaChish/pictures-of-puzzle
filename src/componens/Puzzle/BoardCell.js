import React from 'react'

class BoardCell extends React.Component {
  render() {
    const { options } = this.props

    const styles = {
      width: options.width,
      height: options.height,
      backgroundSize: '670px 470px',
      border: '1px solid black',
    }

    return <div style={styles} />
  }
}

export default BoardCell
