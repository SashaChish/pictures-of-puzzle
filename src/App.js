import React from 'react'

import StickySlider from './componens/StickySlider/StickiSliders'
import PuzzleBoards from './componens/Puzzle/PuzzleBoards'
import shuffle from './data/shuffle'
import { options } from './data/puzzleOptions'
import { key } from './utils/api'
import Loader from './componens/Loader/Loader'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      options: shuffle(options),
      images: [],
      targetURL: '',
      active: false,
      stylesCell: {},
    }
  }

  componentDidMount() {
    setTimeout(this.searchPhotoRequest, 1000)
  }

  searchPhotoRequest = () => {
    return fetch(`https://pixabay.com/api/?key=${key}&image_type=photo`)
      .then(response => response.json())
      .then(json => json.hits)
      .then(hits => {
        const images = hits.map(hit => ({
          id: hit.id,
          tags: hit.tags,
          url: hit.webformatURL,
        }))
        this.setState({ images })
      })
  }

  changeImgOnClick = id => {
    let targetURL = this.state.images.find(img => img.id === id).url
    targetURL = `url("${targetURL}")`

    this.setState({ targetURL })
  }

  takeCellImg = e => {
    const targetStyle = e.target.style
    const { backgroundPosition, backgroundImage } = targetStyle

    if (!this.state.active && backgroundImage) {
      const stylesCell = {
        position: backgroundPosition,
        image: backgroundImage,
      }

      targetStyle.backgroundImage = null
      this.setState({ stylesCell, active: true })
    }
  }

  dropCellImg = e => {
    const style = e.target.style
    const {
      active,
      stylesCell: { position, posSwap, image },
    } = this.state

    if (active && !style.backgroundImage) {
      style.backgroundPosition = position
      style.backgroundImage = image

      this.setState({ active: false })
    } else if (!active && !posSwap) {
      const posSwap = style.backgroundPosition
      this.setState({ posSwap })
    }
  }

  clearCellPuzzle = () => {
    this.setState({ targetURL: '' })
  }

  render() {
    if (this.state.images.length) {
      return (
        <>
          <StickySlider
            images={this.state.images}
            changeImg={this.changeImgOnClick}
          />
          <hr className="hr-horizontal-gradient" />
          <PuzzleBoards
            values={this.state}
            takeCellImg={this.takeCellImg}
            dropCellImg={this.dropCellImg}
            clearCellPuzzle={this.clearCellPuzzle}
          />
        </>
      )
    } else
      return (
        <div className="preloader">
          <Loader />
        </div>
      )
  }
}

export default App
