import React from "react";

const AgeRange = ({ name, list, selectedRange, titleList, handleChange }) => (
  <div>
    {list.map((item, index) => (
      <label key={index}>
        {titleList[index]}
        <input
          type="number"
          id={index}
          name={name}
          value={selectedRange[index] || item}
          min={list[0]}
          max={list[1]}
          onChange={handleChange}
        />
      </label>
    ))}
    <br />
  </div>
);

export default AgeRange;
