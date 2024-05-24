import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaFacebook, FaInstagram, FaTiktok, FaUser } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 5;
`;

const SearchBar = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.a`
  font-size: 1.5rem;
  color: #000;
`;

const MenuContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    background-color: rgba(150, 81, 81, 0.85);
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    ${({ open }) =>
      open &&
      css`
        transform: translateY(0);
      `}
  }
`;

const MenuItem = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid white;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 80%;
    margin-left: -50px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const CloseButton = styled(AiOutlineClose)`
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 20;

  @media (min-width: 1201px) {
    display: none;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <div className='search-icons'>
        <SearchBar type="text" placeholder="მოძებნე პარფიუმერია" className='search-bar'/>
        <IconsContainer className='icons-cont'>
          <Icon href="#"><FaFacebook /></Icon>
          <Icon href="#"><FaInstagram /></Icon>
          <Icon href="#"><FaTiktok /></Icon>
          <Icon href="#"><FaUser /></Icon>
        </IconsContainer>
        </div>
      </HeaderContainer>
      <div className='span-button'>
        <HamburgerButton open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </HamburgerButton>
      </div>
      {open && <CloseButton onClick={() => setOpen(false)} />}
      <MenuContainer open={open}>
        <MenuItem href="#">მამების დღე</MenuItem>
        <MenuItem href="#">ქალებისთვის</MenuItem>
        <MenuItem href="#">კაცებისთვის</MenuItem>
        <MenuItem href="#">შეთავაზებები</MenuItem>
        <MenuItem href="#">სასაჩუქრეები</MenuItem>
        <MenuItem href="#">ბრენდები</MenuItem>
        <MenuItem href="#">სახე და კანი</MenuItem>
      </MenuContainer>
    </>
  );
};

export default Navigation;
