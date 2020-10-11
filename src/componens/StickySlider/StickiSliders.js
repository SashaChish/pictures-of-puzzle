import React from 'react'
import PropTypes from 'prop-types'

import Swiper from 'react-id-swiper'
import Slide from './Slide'
import Navigation from './Navigation'
import 'swiper//css/swiper.css'

class StickySlider extends React.Component {
  constructor() {
    super()

    this.swiperRef = React.createRef()
  }

  goStart = () => {
    const { current } = this.swiperRef
    const groupStart = 0

    current.swiper.slideTo(groupStart, 1000)
  }

  goCurrent = () => {
    const { images, imageURL } = this.props
    const { current } = this.swiperRef

    const currentIndex = images.findIndex(img => img.url === imageURL)

    if (currentIndex !== -1) current.swiper.slideTo(currentIndex - 1, 1000)
  }

  goEnd = () => {
    const { current } = this.swiperRef
    const groupEnd = this.props.images.length

    current.swiper.slideTo(groupEnd, 1000)
  }

  render() {
    const { images, changeImg } = this.props

    const params = {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 40,
      grabCursor: true,
      observer: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 40,
        stretch: 10,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination.pagination-fraction-white',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-white',
        prevEl: '.swiper-button-prev.swiper-button-white',
      },
    }

    return (
      <div className="margin-top">
        <Swiper {...params} ref={this.swiperRef}>
          {images.map(img => (
            <div key={img.id}>
              <Slide
                url={img.url}
                title={img.tags.split(',')[0]}
                id={img.id}
                changeImg={changeImg}
              ></Slide>
            </div>
          ))}
        </Swiper>
        <Navigation
          start={this.goStart}
          current={this.goCurrent}
          end={this.goEnd}
        />
      </div>
    )
  }
}

StickySlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeImg: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default StickySlider
