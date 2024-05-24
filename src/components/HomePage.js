import React from 'react';
import Slider from './SliderComponent';
import FavoritePerfumeSlider from './FavoritePerfumeSlider';
import './style.css';
import PerfumeSlider from './PerfumeSlider';
import Navigation from './Navigation';


const HomePage = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <PerfumeSlider />
      <FavoritePerfumeSlider />
    </>
  );
};

export default HomePage;
