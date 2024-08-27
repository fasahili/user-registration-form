import React, { useState } from "react";
import InputField from "./widgets/InputField/InputField";
import CheckboxField from "./widgets/CheackboxField/CheckboxField";
import RadioButton from "./widgets/RadioButton/RadioButton";
import Summary from "./widgets/displayData/Summary";
import "./style/form.style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender selection is required";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            error={errors.dateOfBirth}
          />
          <RadioButton
            name="gender"
            options={["Male", "Female", "Other"]}
            value={formData.gender}
            onChange={handleChange}
            error={errors.gender}
          />
          <CheckboxField
            label="I accept the terms and conditions"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            error={errors.termsAccepted}
          />

          <button type="submit">Register</button>
        </form>
      ) : (
        <Summary formData={formData} />
      )}
    </div>
  );
};

export default Form;
