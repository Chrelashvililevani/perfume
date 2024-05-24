import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  color: white;
  text-align: center;
  background-image: url(./images/background.jpg);
  height: 30vh;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
