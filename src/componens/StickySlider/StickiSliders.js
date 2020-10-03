import React from 'react'
import PropTypes from 'prop-types'

import Swiper from 'react-id-swiper'
import 'swiper//css/swiper.css'
import Slide from './Slide'

class StickySlider extends React.Component {
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
        rotate: 30,
        stretch: 10,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-black',
        prevEl: '.swiper-button-prev.swiper-button-black',
      },
    }

    return (
      <div className="margin-top">
        <Swiper {...params}>
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
      </div>
    )
  }
}

StickySlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeImg: PropTypes.func.isRequired,
}

export default StickySlider
