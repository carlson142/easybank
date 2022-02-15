import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import logo from "../../images/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Container = styled.header`
  min-height: 8rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white; // Maybe temporary
  position: relative;

  z-index: 1000;

  padding: 0 10rem;
  justify-content: space-between;

  @media (max-width: 1055px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    /* padding: 0 5rem; */
    justify-content: space-between;

    position: fixed;
    min-width: 100%;
  }
`;

const LogoCont = styled.div``;

const Logo = styled.img``;

const DTMenu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DTItem = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-neutral-grayish-blue);
  cursor: pointer;
  position: relative;

  transition: all 0.2s ease-in;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &::after {
    content: "";
    display: block;

    height: 3px;
    width: 100%;
    background-color: var(--color-primary-lime-green);

    position: absolute;
    bottom: -3rem;

    opacity: 0;
    transition: all 0.2s ease-in;
  }

  &:hover {
    color: var(--color-primary-dark-blue);
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  console.log(menu);

  return (
    <Container>
      <LogoCont>
        <Logo src={logo} />
      </LogoCont>

      <DTMenu>
        <DTItem>Home</DTItem>
        <DTItem>About</DTItem>
        <DTItem>Contact</DTItem>
        <DTItem>Blog</DTItem>
        <DTItem>Carrers</DTItem>
      </DTMenu>

      <ButtonContainer>
        <CustomButton align="center" />
      </ButtonContainer>

      <Hamburger onClick={toggleMenu}>
        {menu ? <IoCloseOutline size={25} /> : <IoMenuOutline size={25} />}
      </Hamburger>

      {menu ? <MobileMenu /> : null}
    </Container>
  );
};

export default Header;
