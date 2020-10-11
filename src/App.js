import React from 'react'

import StickySlider from './componens/StickySlider/StickiSliders'
import PuzzleBoards from './componens/Puzzle/PuzzleBoards'
import BackVideo from './componens/BackVideo/BackVideo'
import Loader from './componens/Loader/Loader'
import shuffle from './utils/shuffle'
import { initialOptions } from './data/puzzleOptions'
import { key } from './data/api'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      options: initialOptions,
      shuffleOptions: [],
      images: [],
      videos: [],
      perPage: 20,
      targetURL: {
        image: '',
        video: '',
      },
      switchIndex: 0,
      targetCell: false,
      stylesCell: {},
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.getImages()
      this.getVideo()
    }, 2000)
  }

  componentDidUpdate(props, state) {
    const { perPage } = this.state

    if (state.perPage !== perPage) {
      this.getImages(perPage)
    }
  }

  getVideo = () => {
    fetch(`https://pixabay.com/api/videos/?key=${key}&per_page=200`)
      .then(response => response.json())
      .then(json => json.hits)
      .then(data => {
        const videos = data.map(hit => ({
          id: hit.id,
          tags: hit.tags,
          url: hit.videos.large.url,
        }))

        this.setState({ videos })
      })
  }

  getImages = perPage => {
    fetch(
      `https://pixabay.com/api/?key=${key}&image_type=photo&per_page=${perPage}`
    )
      .then(response => response.json())
      .then(json => json.hits)
      .then(data => {
        const images = data.map(hit => ({
          id: hit.id,
          tags: hit.tags,
          url: hit.webformatURL,
        }))

        this.setState({ images })
      })
  }

  morePictures = () => this.setState({ perPage: this.state.perPage + 20 })

  _searchVideoURL = (tags, videos) => {
    const tagsForSearch = tags.trim().split(',')
    let url = ''

    videos.forEach(video => {
      for (let tag of tagsForSearch) {
        if (video.tags.includes(tag) && !url) {
          url = video.url
        }
      }
    })

    return url
  }

  changeImgOnClick = id => {
    const { images, options, videos } = this.state

    const targetImg = images.find(img => img.id === id)
    const video = this._searchVideoURL(targetImg.tags, videos)

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
      targetURL: { image: targetImg.url, video },
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
        targetURL: { image: '' },
      }
      this.setState(clearning)
    }, 200)
  }

  render() {
    const {
      images,
      videos,
      targetURL: { image, video },
    } = this.state

    if (images.length) {
      return (
        <>
          {videos && <BackVideo videoURL={video} />}
          <StickySlider
            images={images}
            imageURL={image}
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
