import React from "react";

const CheckBox = ({ list, name, selectedItems, handleChange }) => (
  <div>
    {list.map(item => {
      return (
        <div
          key={item.value}
          style={{
            backgroundColor: selectedItems.includes(item.value) && "yellow"
          }}
        >
          <label>
            <input
              type="checkbox"
              name={name}
              value={item.value}
              checked={selectedItems.includes(item.value)}
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

export default CheckBox;
