import React from 'react'

class ItemShuffle extends React.Component {
  render() {
    const { url, options } = this.props

    const styles = {
      width: options.width,
      height: options.height,
      backgroundSize: '670px 470px',
      backgroundImage: `url(${url})`,
      backgroundPosition: options.position,
    }

    return <div style={styles} />
  }
}

export default ItemShuffle
