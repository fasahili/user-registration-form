import React from "react";
import "./inputField.style.css";

const InputField = ({ label, name, type = "text", value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default InputField;
