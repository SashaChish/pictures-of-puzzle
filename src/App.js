import React from 'react'

import StickySlider from './componens/StickySlider/StickiSliders'
import PuzzleShuffle from './componens/Puzzle/PuzzleShuffle'
import PuzzleBoard from './componens/Puzzle/PuzzleBoard'
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
    }
  }

  componentDidMount() {
    setTimeout(this.searchPhoto, 2000)
  }

  searchPhoto = () => {
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
    const targetURL = this.state.images.find(img => img.id === id).url
    const options = shuffle(this.state.options)
    this.setState({ targetURL, options })
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
          <div className="container-boards">
            <PuzzleShuffle values={this.state} />
            <PuzzleBoard values={this.state} />
          </div>
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
