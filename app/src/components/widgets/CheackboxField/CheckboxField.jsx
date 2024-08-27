import React from "react";
import "./CheckboxField.style.css";
const CheckboxField = ({ label, name, checked, onChange, error }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default CheckboxField;
