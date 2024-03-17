import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../components/UI/Container/Container.jsx";
import OverlayComponents from "../components/Auth/Overlay/Overlay.jsx"; // Update this path accordingly
import Form from "../components/UI/Form/Form.jsx";
import Title from "../components/UI/Title.js";
import Input from "../components/UI/Input.js";
import Button from "../components/UI/Button/Button.jsx";
import Anchor from "../components/UI/Anchor/Anchor.jsx";
import Paragraph from "../components/UI/Paragraph.js";
import AuthContainer from "../components/Auth/Auth/AuthContainer.jsx"; // Ensure this path is correct
import { useAuth } from "../context/AuthContext.js";

const AuthPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AuthPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const toggleSignIn = () => {
    setContentVisible(false);
    setTimeout(() => {
      setSignIn(!signIn);
      setContentVisible(true);
    }, 300);
  };

  useEffect(() => {
    setContentVisible(true);
  }, [signIn]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "GET", // Explicitly setting the method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "user@example.com",
          password: "userpassword",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      // Handle success
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <AuthPageWrapper>
      <Container>
        <AuthContainer signIn={signIn}>
          {contentVisible && (
            <Form onSubmit={handleSubmit}>
              {!signIn && (
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {signIn ? (
                <>
                  <Anchor href="#">Forgot your password?</Anchor>
                  <Button type="submit">Sign In</Button>
                </>
              ) : (
                <Button type="submit">Sign Up</Button>
              )}
            </Form>
          )}
        </AuthContainer>

        <OverlayComponents
          signIn={!signIn}
          position={signIn ? "right" : "left"}
        >
          <Title>{signIn ? "Hello, Friend!" : "Welcome Back!"}</Title>
          <Paragraph>
            {signIn
              ? "Enter your personal details and start your journey with us"
              : "To keep connected with us please login with your personal info"}
          </Paragraph>
          <Button ghost onClick={toggleSignIn}>
            {signIn ? "Sign Up" : "Sign In"}
          </Button>
        </OverlayComponents>
      </Container>
    </AuthPageWrapper>
  );
};

export default AuthPage;
