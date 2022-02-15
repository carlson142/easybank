import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoImg } from "../../images/logo footer.svg";
import "./icons.scss";

import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io5";

import CustomButton from "../CustomButton/CustomButton";

const Container = styled.footer`
  max-width: 100vw;
  min-height: 25vh;

  background-color: var(--color-primary-dark-blue);
  color: white;

  padding: 5rem 10rem;

  display: flex;

  @media (max-width: 1055px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const Left = styled.div`
  width: 20%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 960px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  } ;
`;

const Logo = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  } ;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialCont = styled.div`
  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  } ;
`;

const Mid = styled.div`
  width: 50%;
  min-height: 100%;

  display: flex;

  @media (max-width: 960px) {
    justify-content: center;
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  } ;
`;

const List = styled.ul`
  height: 100%;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.li`
  font-size: 1.8rem;
  cursor: pointer;

  margin-left: 10rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: var(--color-primary-lime-green);
  }

  @media (max-width: 1055px) {
    margin-left: 5rem;
  }

  @media (max-width: 960px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 450px) {
    margin-left: 0;
    margin-bottom: 2rem;
  } ;
`;

const Right = styled.div`
  width: 30%;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 960px) {
    width: 33%;
    text-align: end;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;

    align-items: center;
  } ;
`;

const Copyright = styled.p`
  font-size: 1.6rem;
  color: var(--color-neutral-grayish-blue);

  @media (max-width: 768px) {
    margin-top: 2rem;
  } ;
`;

const Footer = () => {
  return (
    <Container>
      {/* LEFT */}
      <Left>
        <Logo>
          <LogoImg className="iconLogo" />
        </Logo>

        <Socials>
          <SocialCont>
            <IoLogoFacebook className="icons" />
          </SocialCont>
          <SocialCont>
            <IoLogoYoutube className="icons" />
          </SocialCont>
          <SocialCont>
            <IoLogoTwitter className="icons" />
          </SocialCont>
          <SocialCont>
            <IoLogoPinterest className="icons" />
          </SocialCont>
          <SocialCont>
            <IoLogoInstagram className="icons" />
          </SocialCont>
        </Socials>
      </Left>

      {/* CENTER */}
      <Mid>
        <List>
          <Item>About Us</Item>
          <Item>Contact</Item>
          <Item>Blog</Item>
        </List>

        <List>
          <Item>Careers</Item>
          <Item>Support</Item>
          <Item>Privacy Policy</Item>
        </List>
      </Mid>

      {/* RIGHT */}
      <Right>
        <CustomButton align="flex-end" />
        <Copyright>© Easybank. All Rights Reserved</Copyright>
      </Right>
    </Container>
  );
};

export default Footer;
