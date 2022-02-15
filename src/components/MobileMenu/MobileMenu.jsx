import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: #0000003d;
  background: linear-gradient(
    to bottom,
    var(--color-primary-dark-blue),
    #ffffff34
  );
`;

const Menu = styled.div`
  min-width: 90vw;
  min-height: 30rem;

  background-color: white;

  position: absolute;
  top: 2rem;
  left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;
`;

const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.li`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary-dark-blue);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const MobileMenu = () => {
  return (
    <Container>
      <Menu>
        <List>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Contact</Item>
          <Item>Blog</Item>
          <Item>Carrers</Item>
        </List>
      </Menu>
    </Container>
  );
};

export default MobileMenu;
