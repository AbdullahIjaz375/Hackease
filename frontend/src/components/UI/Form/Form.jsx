import React from "react";
import FormWrapper from "./FormStyles"; // Import the styled component

const Form = ({ children }) => {
  return <FormWrapper>{children}</FormWrapper>;
};

export default Form;
