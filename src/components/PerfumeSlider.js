import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './CustomArrows'; // Import the custom arrows

const perfumes = [
  {
    name: 'Perfume 1',
    image: '/images/par1.jpg',
    description: 'Description for Perfume 1'
  },
  {
    name: 'Perfume 2',
    image: '/images/par2.jpg',
    description: 'Description for Perfume 2'
  },
  {
    name: 'Perfume 1',
    image: '/images/par3.jpg',
    description: 'Description for Perfume 1'
  },
  {
    name: 'Perfume 2',
    image: '/images/par1.jpg',
    description: 'Description for Perfume 2'
  },
  {
    name: 'Perfume 1',
    image: '/images/par2.jpg',
    description: 'Description for Perfume 1'
  },
  {
    name: 'Perfume 2',
    image: '/images/par3.jpg',
    description: 'Description for Perfume 2'
  },
];


const PerfumeSlider = () => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="perfume-slider">
        <div className='textalt'>ფავორიტები</div>
      <Slider {...settings}>
        {perfumes.map((perfume, index) => (
          <div key={index} className="perfume-slide">
            <img src={perfume.image} alt={perfume.name} />
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PerfumeSlider;
