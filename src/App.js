import React from 'react'

import StickySlider from './componens/StickySlider/StickiSliders'
import PuzzleShuffle from './componens/Puzzle/PuzzleShuffle'
import PuzzleBoard from './componens/Puzzle/PuzzleBoard'
import { options } from './data/puzzleOptions'
import shuffle from './data/shuffle'

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
    const key = '17518139-b73def73b5f5b784fdb869618'

    fetch(`https://pixabay.com/api/?key=${key}&image_type=photo`)
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
    return (
      <div className="margin-top">
        <StickySlider
          images={this.state.images}
          changeImg={this.changeImgOnClick}
        />
        <hr className="hr-horizontal-gradient" />
        <div className="container-boards">
          <PuzzleShuffle values={this.state} />
          <PuzzleBoard values={this.state} />
        </div>
      </div>
    )
  }
}

export default App
