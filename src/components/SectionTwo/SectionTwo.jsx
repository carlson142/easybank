import React from "react";
import styled from "styled-components";

import icon_1 from "../../images/icon-online.svg";
import icon_2 from "../../images/icon-budgeting.svg";
import icon_3 from "../../images/icon-onboarding.svg";
import icon_4 from "../../images/icon-api.svg";

const Container = styled.section`
  min-height: 80vh;
  max-width: 100vw;

  background-color: var(--color-neutral-light-grayish-blue);
  padding: 7rem 10rem 10rem 10rem;

  display: flex;
  flex-direction: column;

  @media (min-width: 1441px) {
    min-height: 70vh;
  }

  @media (max-width: 1055px) {
    padding: 7rem 5rem 10rem 5rem;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: var(--color-primary-dark-blue);

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);

  margin-bottom: 7rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  max-width: 22%;

  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media (max-width: 960px) {
    min-width: 45%;
    align-items: center;

    margin-bottom: 5rem;
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

const CardTop = styled.div``;

const CartIcon = styled.img``;

const CardMid = styled.div`
  font-size: 2rem;
  font-weight: 400;
`;

const CardBot = styled.div`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const SectionTwo = () => {
  return (
    <Container>
      <Title>Why choose Easybank?</Title>
      <Text>
        We leverage Open Banking to turn your bank account into your financial
        hub. <br /> Control your finances like never before.
      </Text>

      <Cards>
        <Card>
          <CardTop>
            <CartIcon src={icon_1} />
          </CardTop>

          <CardMid>Online Banking</CardMid>

          <CardBot>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </CardBot>
        </Card>

        <Card>
          <CardTop>
            <CartIcon src={icon_2} />
          </CardTop>

          <CardMid>Simple Budgeting</CardMid>

          <CardBot>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </CardBot>
        </Card>

        <Card>
          <CardTop>
            <CartIcon src={icon_3} />
          </CardTop>

          <CardMid>Fast Onboarding</CardMid>

          <CardBot>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </CardBot>
        </Card>

        <Card>
          <CardTop>
            <CartIcon src={icon_4} />
          </CardTop>

          <CardMid>Open API</CardMid>

          <CardBot>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </CardBot>
        </Card>
      </Cards>
    </Container>
  );
};

export default SectionTwo;
