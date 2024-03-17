import React from "react";
import FormWrapper from "./FormStyles"; // Import the styled component

const Form = ({ children, onSubmit }) => {
  return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
};

export default Form;
