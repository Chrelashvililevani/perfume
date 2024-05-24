import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  width: 100%;
  bottom: 0;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  p {
    padding-left: 20px;
  }
  h2 {
    padding-left: 20px;
  }
`;
const Icon = styled.a`
  font-size: 1.5rem;
  color: #000;
`;
const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 20px;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <h2>კონტაქტი</h2>
      <p>მობილურის ნომერი:</p>
      <p>ელ.ფოსტა:</p>
      <IconsContainer>
          <Icon href="#"><FaFacebook /></Icon>
          <Icon href="#"><FaInstagram /></Icon>
          <Icon href="#"><FaTiktok /></Icon>
        </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
