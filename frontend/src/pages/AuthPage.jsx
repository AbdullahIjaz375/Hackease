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
import apiRequest from "../API/api.js";

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
    console.log(`Handling change for ${name}: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData.email, formData.password, formData.name);

    const endpoint = signIn ? "/auth/login" : "/auth/signup";
    const options = {
      method: signIn ? "POST" : "PUT",
      body: {
        email: formData.email,
        password: formData.password,
        ...(signIn ? {} : { username: formData.name }),
      },
    };

    try {
      const result = await apiRequest(endpoint, options);
      console.log(result);
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
