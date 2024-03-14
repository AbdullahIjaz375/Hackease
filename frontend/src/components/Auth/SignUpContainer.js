import React from "react";
import styled from "styled-components";

const SignUpContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${({ signIn }) =>
    signIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;

const SignUpContainer = ({ signIn, children }) => {
  return (
    <SignUpContainerWrapper signIn={signIn}>{children}</SignUpContainerWrapper>
  );
};

export default SignUpContainer;
