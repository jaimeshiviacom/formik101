import React from "react";

const RadioBox = ({ list, name, selectedItem, handleChange }) => (
  <div>
    {list.map(item => {
      return (
        <div
          key={item.label}
          style={{
            backgroundColor: selectedItem === item.label && "yellow"
          }}
        >
          <label>
            <input
              type="radio"
              name={name}
              value={item.label}
              id={item.type}
              onChange={handleChange}
              hidden
            />
            {item.label}
          </label>
        </div>
      );
    })}
    <br />
  </div>
);

export default RadioBox;
