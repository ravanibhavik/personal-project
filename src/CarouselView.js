import React from 'react';
import { Carousel } from 'react-bootstrap';
import amazon_echo from './amazon_echo.jpg';
import intro_lg from './intro_lg.jpg';
import chairs from './chairs.jpg';

const CarouselView = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={amazon_echo} alt="" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={intro_lg} alt="" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={chairs} alt="" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}


export default CarouselView;