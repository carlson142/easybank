import React from "react";
import styled from "styled-components";

import img_1 from "../../images/image-currency.jpg";
import img_2 from "../../images/image-restaurant.jpg";
import img_3 from "../../images/image-plane.jpg";
import img_4 from "../../images/image-confetti.jpg";

const Container = styled.section`
  max-width: 100vw;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-neutral-very-light-gray);

  padding: 5rem 10rem;

  @media (min-width: 1441px) {
    min-height: 70vh;
  }

  @media (max-width: 1330px) {
    padding-bottom: 0;
  }

  @media (max-width: 960px) {
    padding: 5rem 5rem 0 5rem;
  }

  @media (max-width: 450px) {
    padding: 5rem 2rem 0 2rem;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: var(--color-primary-dark-blue);

  @media (max-width: 1330px) {
    margin-bottom: 5rem;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 1330px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  max-width: 22%;
  min-height: 45rem;

  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 1330px) {
    min-width: 45%;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  @media (max-width: 450px) {
    margin-bottom: 3rem;
  }
`;

const CardTop = styled.div`
  height: 50%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const CardBot = styled.div`
  height: 50%;
  width: 100%;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;

  @media (max-width: 1330px) {
    height: 45%;
  }

  @media (max-width: 960px) {
    height: 50%;
  }

  @media (max-width: 768px) {
    height: 30%;
  }

  @media (max-width: 600px) {
    height: 40%;
  }

  @media (max-width: 450px) {
    height: 50%;
  }
`;

const BotAuthor = styled.span`
  font-size: 1.4rem;
  color: var(--color-neutral-grayish-blue);
`;

const BotTitle = styled.span`
  color: var(--color-primary-dark-blue);
  font-size: 1.8rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: var(--color-primary-lime-green);
  }
`;

const BotText = styled.span`
  font-size: 1.4rem;
  color: var(--color-neutral-grayish-blue);
  line-height: 1.2;
  line-height: 1.6;
`;

const SectionThree = () => {
  return (
    <Container>
      <Title>Latest Articles</Title>

      <Cards>
        <Card>
          <CardTop>
            <Image src={img_1} alt="img1" />
          </CardTop>
          <CardBot>
            <BotAuthor>By Claire Robinson</BotAuthor>
            <BotTitle>Receive money in any currency with no fees</BotTitle>
            <BotText>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </BotText>
          </CardBot>
        </Card>

        <Card>
          <CardTop>
            <Image src={img_2} alt="img2" />
          </CardTop>
          <CardBot>
            <BotAuthor>By Wilson Hutton</BotAuthor>
            <BotTitle>Treat yourself without worrying about money</BotTitle>
            <BotText>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </BotText>
          </CardBot>
        </Card>

        <Card>
          <CardTop>
            <Image src={img_3} alt="img3" />
          </CardTop>
          <CardBot>
            <BotAuthor>By Wilson Hutton</BotAuthor>
            <BotTitle>Take your Easybank card wherever you go</BotTitle>
            <BotText>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </BotText>
          </CardBot>
        </Card>

        <Card>
          <CardTop>
            <Image src={img_4} alt="img4" />
          </CardTop>
          <CardBot>
            <BotAuthor>By Claire Robinson</BotAuthor>
            <BotTitle>Our invite-only Beta accounts are now live!</BotTitle>
            <BotText>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </BotText>
          </CardBot>
        </Card>
      </Cards>
    </Container>
  );
};

export default SectionThree;
