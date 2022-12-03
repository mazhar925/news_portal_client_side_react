import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/brand1.png'
import Brand2 from '../../../assets/brands/brand2.png'

export default function Brand() {
  return (
    <div>
        <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
