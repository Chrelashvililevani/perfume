import React from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  z-index: 2;
  height: 100%;

  &.slick-prev {
    left: -50px;
  }

  &.slick-next {
    right: -50px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

const ArrowIcon = styled.span`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
`;

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <ArrowIcon>&#9664;</ArrowIcon>
    </Arrow>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <ArrowIcon>&#9654;</ArrowIcon>
    </Arrow>
  );
};
