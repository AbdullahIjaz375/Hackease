import React from "react";
import styled from "styled-components";
import "./Button.css";

const ButtonWrapper = styled.button`
  border-radius: 20px;
  border: 1px solid ${({ ghost }) => (ghost ? "#ffffff" : "#ff4b2b")};
  background-color: ${({ ghost }) => (ghost ? "transparent" : "#ff4b2b")};
  color: ${({ ghost }) => (ghost ? "#ffffff" : "#ffffff")};
`;

const Button = ({ children, ghost, onClick }) => {
  return (
    <ButtonWrapper
      className={ghost ? "ghost-button" : "solid-button"}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
