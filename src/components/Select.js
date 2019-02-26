import React from "react";

const Select = ({ title, name, value, list, disabled, handleChange }) => (
  <div>
    <p>{title}</p>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    >
      {list.map(item => (
        <option key={item} value={item} label={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
