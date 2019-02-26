import React from "react";

const Input = ({
  title,
  type,
  name,
  value,
  placeholder,
  handleChange,
  disabled
}) => (
  <div>
    <p>{title}</p>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
    />
  </div>
);

export default Input;
