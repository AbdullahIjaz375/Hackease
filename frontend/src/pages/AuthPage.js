import React, { useState } from "react";
import styled from "styled-components";
import Container from "../components/UI/Container/Container.jsx";
import OverlayComponents from "../components/Auth/Overlay/Overlay.jsx"; // Update this path accordingly
import Form from "../components/UI/Form/Form.jsx";
import Title from "../components/UI/Title.js";
import Input from "../components/UI/Input.js";
import Button from "../components/UI/Button/Button.jsx";
import Anchor from "../components/UI/Anchor/Anchor.jsx";
import Paragraph from "../components/UI/Paragraph.js";
import AuthContainer from "../components/Auth/Auth/AuthContainer.jsx";

const AuthPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AuthPage = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    console.log("toggleSignIn", signIn);
    setSignIn(!signIn);
  };

  return (
    <AuthPageWrapper>
      <Container>
        {/* Use a single AuthContainer for both sign-in and sign-up */}
        <AuthContainer signIn={signIn}>
          {signIn ? (
            // Sign-in form contents
            <Form>
              <Title>Sign in</Title>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Anchor href="#">Forgot your password?</Anchor>
              <Button>Sign In</Button>
            </Form>
          ) : (
            // Sign-up form contents
            <Form>
              <Title>Create Account</Title>
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button>Sign Up</Button>
            </Form>
          )}
        </AuthContainer>

        {/* Render the overlay components */}
        <OverlayComponents
          signIn={!signIn}
          position={signIn ? "right" : "left"}
        >
          {signIn ? (
            <>
              <Title>Hello, Friend!</Title>
              <Paragraph>
                Enter your personal details and start your journey with us
              </Paragraph>
              <Button ghost onClick={toggleSignIn}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Title>Welcome Back!</Title>
              <Paragraph>
                To keep connected with us please login with your personal info
              </Paragraph>
              <Button ghost onClick={toggleSignIn}>
                Sign In
              </Button>
            </>
          )}
        </OverlayComponents>
      </Container>
    </AuthPageWrapper>
  );
};

export default AuthPage;
