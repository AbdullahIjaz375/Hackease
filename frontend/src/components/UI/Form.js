import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Form = ({ children }) => {
  return <FormWrapper>{children}</FormWrapper>;
};

export default Form;
