import React from 'react';
import Slider from './SliderComponent';
import FavoritePerfumeSlider from './FavoritePerfumeSlider';
import './style.css';
import PerfumeSlider from './PerfumeSlider';
import Navigation from './Navigation';
import ScrollToTopButton from './ScrollToTopButton';


const HomePage = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <PerfumeSlider />
      <FavoritePerfumeSlider />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
