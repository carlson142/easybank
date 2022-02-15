import React from "react";
import styled from "styled-components";

const Button = styled.button`
  align-self: center;
  align-self: ${(props) => props.align};

  border: none;
  border-radius: 3rem;
  padding: 1rem 2.5rem;

  font-size: 1.6rem;
  font-family: inherit;
  color: white;
  background: linear-gradient(
    to right,
    var(--color-primary-lime-green),
    var(--color-primary-bright-cyan)
  );

  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`;

const CustomButton = ({ align }) => {
  return <Button align={align}>Request Invite</Button>;
};

export default CustomButton;
