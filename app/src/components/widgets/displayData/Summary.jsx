import React from "react";
import "./summary.style.css";

const Summary = ({ formData }) => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">Registration Successful!</h2>
      <div className="summary-content">
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Date of Birth:</strong> {formData.dateOfBirth}
        </p>
        <p>
          <strong>Gender:</strong> {formData.gender}
        </p>
      </div>
    </div>
  );
};

export default Summary;
