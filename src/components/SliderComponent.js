import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './CustomArrows'; // Import the custom arrows

const SliderContainer = styled.div`
  width: 70%;
  margin: 0rem auto;
  position: relative;
`;

const AltSliderContainer = styled.div`
  width: 70%;  /* Ensure the width matches SliderContainer */
  margin: 0 auto;
  position: relative;
  top: 3rem;  /* Adjust position as needed */
  z-index: 1;
`;

const AltText = styled.div`
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 400px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
`;

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slides = [
    { id: 1, image: 'images/womanp.jpg', alt: 'პარფიუმერია ქალებისთვის' },
    { id: 2, image: 'images/manp.jpg', alt: 'პარფიუმერია კაცებისთვის' },
    { id: 3, image: 'images/couplep.jpg', alt: 'პარფიუმერია წყვილებისთვის' },
  ];

  return (
    <SliderContainer>
      <AltSliderContainer>
        <AltText>{slides[currentSlide].alt}</AltText>
      </AltSliderContainer>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id}>
            <Image src={slide.image} alt={slide.alt} />
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default SliderComponent;
