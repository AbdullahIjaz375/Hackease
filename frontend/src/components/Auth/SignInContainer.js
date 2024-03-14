import React from "react";
import styled from "styled-components";

const SignInContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${({ signIn }) => (signIn !== true ? `transform: translateX(100%);` : null)}
`;

const SignInContainer = ({ signIn, children }) => {
  return (
    <SignInContainerWrapper signIn={signIn}>{children}</SignInContainerWrapper>
  );
};

export default SignInContainer;
