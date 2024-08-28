import React from "react";
import "./RadioButton.style.css";
const RadioButtonGroup = ({ label, name, options, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default RadioButtonGroup;
