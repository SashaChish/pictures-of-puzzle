import React from 'react'

import StickySlider from './componens/StickySlider/StickiSliders'
import PuzzleBoards from './componens/Puzzle/PuzzleBoards'
import shuffle from './utils/shuffle'
import { initialOptions } from './data/puzzleOptions'
import { key } from './data/api'
import Loader from './componens/Loader/Loader'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      options: initialOptions,
      shuffleOptions: [],
      images: [],
      perPage: 20,
      targetURL: '',
      switchIndex: 0,
      targetCell: false,
      stylesCell: {},
    }
  }

  componentDidMount() {
    setTimeout(this.getImages, 2000)
  }

  componentDidUpdate(props, state) {
    const { perPage } = this.state

    if (state.perPage !== perPage) {
      this.getImages(perPage)
    }
  }

  getImages = perPage => {
    fetch(
      `https://pixabay.com/api/?key=${key}&image_type=photo&per_page=${perPage}`
    )
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

  morePictures = () => this.setState({ perPage: this.state.perPage + 20 })

  changeImgOnClick = id => {
    const { images, options } = this.state

    let target = images.find(img => img.id === id).url

    const clearStyles = options.map(item => {
      if (item.stylesCell) {
        delete item.stylesCell
        return item
      }

      return item
    })

    const values = {
      shuffleOptions: shuffle(initialOptions),
      options: clearStyles,
      targetCell: false,
      targetURL: target,
    }

    this.setState(values)
  }

  takeCellImg = (id, e) => {
    const { backgroundPosition, backgroundImage } = e.target.style
    const { targetCell, shuffleOptions } = this.state

    if (!targetCell && backgroundImage) {
      const stylesCell = {
        backgroundPosition,
        backgroundImage,
      }

      const shuffleOptionsUpdate = shuffleOptions.filter(item => item.id !== id)
      const values = {
        stylesCell,
        shuffleOptions: shuffleOptionsUpdate,
        targetCell: true,
      }

      this.setState(values)
    }
  }

  dropCellImg = (id, e) => {
    const targetStyle = e.target.style
    const { options, targetCell, stylesCell } = this.state

    if (targetCell && !targetStyle.backgroundImage) {
      const updateOptions = options.map(item => {
        if (item.id === id)
          return {
            ...item,
            stylesCell,
          }
        else return item
      })

      this.setState({ targetCell: false, options: updateOptions })
    }
  }

  takeCellGameBoard = (index, e) => {
    e.preventDefault()

    this.setState({ switchIndex: index })
  }

  switchCellGameBoard = index => {
    const { options, switchIndex } = this.state

    if (index !== switchIndex) {
      const temp = options[index]
      options[index] = options[switchIndex]
      options[switchIndex] = temp

      this.setState({ options })
    }
  }

  clearCellPuzzleBoards = () => {
    setTimeout(() => {
      const clearning = {
        targetCell: false,
        stylesCell: {},
        targetURL: '',
      }
      this.setState(clearning)
    }, 200)
  }

  render() {
    if (this.state.images.length) {
      return (
        <>
          <StickySlider
            images={this.state.images}
            targetURL={this.state.targetURL}
            changeImg={this.changeImgOnClick}
          />
          <hr className="hr-horizontal-gradient" />
          <PuzzleBoards
            values={this.state}
            takeCellImg={this.takeCellImg}
            dropCellImg={this.dropCellImg}
            clearCellPuzzle={this.clearCellPuzzleBoards}
            takeCellGameBoard={this.takeCellGameBoard}
            switchCellGameBoard={this.switchCellGameBoard}
            morePictures={this.morePictures}
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
