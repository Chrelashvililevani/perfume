import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTiktok, FaUser } from 'react-icons/fa';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
`;

const MenuItem = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <>
      <HeaderContainer>
        <SearchBar type="text" placeholder="მოძებნე პარფიუმერია" />
        <IconsContainer>
          <Icon href="#"><FaFacebook /></Icon>
          <Icon href="#"><FaInstagram /></Icon>
          <Icon href="#"><FaTiktok /></Icon>
          <Icon href="#"><FaUser /></Icon>
        </IconsContainer>
      </HeaderContainer>
      <MenuContainer>
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
