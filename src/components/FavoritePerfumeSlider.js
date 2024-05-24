import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './CustomArrows'; // Import the custom arrows

const SliderContainer = styled.div`
  width: 70%;
  margin: 2rem auto;
  position: relative;
`;

const AltText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 70%;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 1;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  max-width: 40%;
  max-height: 400px;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin: 0.5rem 0;
`;

const Votes = styled.div`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
`;

const FavoritePerfumeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true, // Ensure arrows are enabled
  };

  const slides = [
    {
      id: 1,
      image: '/images/par1.jpg',
      title: 'Rose Petals',
      description: 'A delightful floral fragrance with hints of rose and jasmine.',
      price: '$49.99',
      votes: '★★★★★',
    },
    {
      id: 2,
      image: '/images/par2.jpg',
      title: 'Lavender Dreams',
      description: 'A soothing blend of lavender and bergamot for a relaxing scent.',
      price: '$59.99',
      votes: '★★★★☆',
    },
    {
      id: 3,
      image: '/images/par3.jpg',
      title: 'Citrus Bliss',
      description: 'A refreshing citrus scent perfect for both men and women.',
      price: '$39.99',
      votes: '★★★★☆',
    },
  ];

  return (
    <SliderContainer>
      <AltText>შენი არჩევანი</AltText>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id}>
            <Image src={slide.image} alt={slide.title} />
            <Title>{slide.title}</Title>
            <Description>{slide.description}</Description>
            <Price>{slide.price}</Price>
            <Votes>{slide.votes}</Votes>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default FavoritePerfumeSlider;
