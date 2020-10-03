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
      options,
      shuffleOptions: [],
      images: [],
      perPage: 20,
      targetURL: '',
      switchId: 1,
      active: false,
      stylesCell: {},
    }
  }

  componentDidMount() {
    setTimeout(this.getImages, 2000)
  }

  componentDidUpdate(props, state) {
    if (state.perPage !== this.state.perPage) {
      this.getImages(this.state.perPage)
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
    let targetURL = this.state.images.find(img => img.id === id).url
    const values = {
      shuffleOptions: shuffle(options),
      targetURL: `url(${targetURL})`,
    }

    this.setState(values)
  }

  takeCellImg = (id, e) => {
    const { backgroundPosition, backgroundImage } = e.target.style
    const { active, shuffleOptions } = this.state

    if (!active && backgroundImage) {
      const stylesCell = {
        position: backgroundPosition,
        url: backgroundImage,
      }

      const options = shuffleOptions.filter(item => item.id !== id)
      const values = { stylesCell, shuffleOptions: options, active: true }

      this.setState(values)
    }
  }

  dropCellImg = e => {
    const style = e.target.style
    const {
      active,
      stylesCell: { position, url },
    } = this.state

    if (active && !style.backgroundImage) {
      style.backgroundPosition = position
      style.backgroundImage = url

      this.setState({ active: false })
    }
  }

  takeCellGameBoard = (id, e) => {
    e.preventDefault()

    this.setState({ switchId: id })
  }

  switchCellGameBoard = id => {
    const { options, switchId } = this.state

    if (id !== switchId) {
      const switchOptions = options.map(option => {
        if (option.id === id) return { ...option, id: switchId }
        else if (option.id === switchId) return { ...option, id }
        else return option
      })

      this.setState({ options: switchOptions })
    }
  }

  clearCellPuzzle = () => {
    setTimeout(() => {
      const clearning = {
        active: false,
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
            changeImg={this.changeImgOnClick}
          />
          <hr className="hr-horizontal-gradient" />
          <PuzzleBoards
            values={this.state}
            takeCellImg={this.takeCellImg}
            dropCellImg={this.dropCellImg}
            clearCellPuzzle={this.clearCellPuzzle}
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
