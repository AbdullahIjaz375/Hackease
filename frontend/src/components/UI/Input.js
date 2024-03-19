import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
