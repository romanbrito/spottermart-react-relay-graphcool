import React, {Component} from 'react'
import Slider from 'react-slick'
import {CloudinaryContext, Image, Transformation, Video} from 'cloudinary-react'
import '../sass/ImageSlider.css'

const ImageSlider = (props) => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
      <Slider {...sliderSettings}>
        {props.pictures.map(picture => (
          <div key={picture.public_id}><Image cloudName="spottermart" publicId={picture.public_id} width="300"
                                              crop="scale"/></div>
        ))}
      </Slider>
  )
}

export default ImageSlider