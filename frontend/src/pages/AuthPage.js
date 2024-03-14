import React, { useState } from "react";
import styled from "styled-components";
import Container from "../components/UI/Container.js";
import SignUpContainer from "../components/Auth/SignUpContainer.js";
import SignInContainer from "../components/Auth/SignInContainer.js";
import OverlayContainer from "../components/Auth/OverlayContainer.js";
import Overlay from "../components/Auth/Overlay.js";
import LeftOverlayPanel from "../components/Auth/LeftOverlayPanel.js";
import RightOverlayPanel from "../components/Auth/RightOverlayPanel.js";
import Form from "../components/UI/Form.js";
import Title from "../components/UI/Title.js";
import Input from "../components/UI/Input.js";
import Button from "../components/UI/Button.js";
import GhostButton from "../components/UI/GhostButton.js";
import Anchor from "../components/UI/Anchor.js";
import Paragraph from "../components/UI/Paragraph.js";

const AuthPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AuthPage = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    console.log("Sign in flag: ", signIn);
    setSignIn(!signIn);
  };

  return (
    <AuthPageWrapper>
      <Container>
        <SignUpContainer signIn={!signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
          </Form>
        </SignUpContainer>

        <SignInContainer signIn={signIn}>
          <Form>
            <Title>Sign in</Title>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Anchor href="#">Forgot your password?</Anchor>
            <Button>Sign In</Button>
          </Form>
        </SignInContainer>

        <OverlayContainer signIn={signIn}>
          <Overlay signIn={signIn}>
            <LeftOverlayPanel signIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph>
                To keep connected with us please login with your personal info
              </Paragraph>
              <GhostButton onClick={() => toggleSignIn()}>Sign In</GhostButton>
            </LeftOverlayPanel>

            <RightOverlayPanel signIn={!signIn}>
              <Title>Hello, Friend!</Title>
              <Paragraph>
                Enter Your personal details and start journey with us
              </Paragraph>
              <GhostButton onClick={() => toggleSignIn()}>Sign Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </AuthPageWrapper>
  );
};

export default AuthPage;
