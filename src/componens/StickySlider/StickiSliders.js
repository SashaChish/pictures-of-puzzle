import React from 'react'

import Swiper from 'react-id-swiper'
import 'swiper/swiper.scss'

import Slide from './Slide'

class StickySlider extends React.Component {
  render() {
    const { images, changeImg } = this.props

    const params = {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 40,
      // loop: true,
      // loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'fraction',
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // observer: true,
      // observeParents: true,
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

export default StickySlider