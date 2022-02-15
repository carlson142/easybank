import React from "react";
import styled from "styled-components";

import bgDT from "../../images/bg-intro-desktop.svg";
import bgMB from "../../images/bg-intro-mobile.svg";
import hero_1 from "../../images/image-mockups.png";
import CustomButton from "../CustomButton/CustomButton";

const Container = styled.main`
  max-width: 100vw;
  min-height: 80vh;

  display: flex;
  background-color: var(--color-neutral-very-light-gray);

  @media (min-width: 1441px) {
    min-height: 70vh;
  }

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5rem 0 10rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  /* MEDIA */
  @media (max-width: 1330px) {
    padding: 0 0rem 0 10rem;
  }

  @media (max-width: 1055px) {
    padding: 0 0rem 0 5rem;
  }

  @media (max-width: 960px) {
    width: 100%;
    height: 35rem;
    padding: 2rem 5rem;
  }

  @media (max-width: 600px) {
    text-align: center;
    align-items: center;

    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: var(--color-primary-dark-blue);

  @media (max-width: 1330px) {
    font-size: 5rem;
  }

  @media (max-width: 960px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Right = styled.div`
  width: 55%;

  background-image: url(${bgDT});
  background-position: left;

  position: relative;

  @media (max-width: 960px) {
    width: 100%;
    height: 40rem;
  }

  @media (max-width: 375px) {
    background-image: url(${bgMB});
    background-repeat: no-repeat;
    background-position: right;
  }
`;

const ImgCont = styled.div`
  position: absolute;
  right: -13rem;
  top: -12rem;

  @media (max-width: 960px) {
    top: -20rem;
    right: -26rem;
  }

  @media (max-width: 768px) {
    top: -2rem;
    right: -39rem;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: contain;

  @media (max-width: 960px) {
    height: 80%;
    width: 80%;
  }

  @media (max-width: 768px) {
    height: 55%;
    width: 55%;
  }

  @media (max-width: 600px) {
    height: 50%;
    width: 50%;
  }
`;

const SectionOne = () => {
  return (
    <Container>
      <Left>
        <Title>Next generation digital banking</Title>
        <Text>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Text>
        <CustomButton align="flex-start" />
      </Left>

      <Right>
        <ImgCont>
          <Image src={hero_1} alt="hero-1" />
        </ImgCont>
      </Right>
    </Container>
  );
};

export default SectionOne;
