import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ff6f61;
  color: white;
  text-align: center;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Perfume Shop</p>
    </FooterContainer>
  );
};

export default Footer;
