import React from "react";

const Input = ({
  title,
  type,
  name,
  value,
  min,
  max,
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
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
    />
  </div>
);

export default Input;
