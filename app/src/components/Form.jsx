import React, { useState } from "react";
import InputField from "./widgets/InputField/InputField";
import CheckboxField from "./widgets/CheackboxField/CheckboxField";
import RadioButton from "./widgets/RadioButton/RadioButton";
import Summary from "./widgets/displayData/Summary";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

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

  const { t, i18n } = useTranslation();

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

    if (!formData.firstName) newErrors.firstName = t("form.errors.firstName");
    if (!formData.lastName) newErrors.lastName = t("form.errors.lastName");
    if (!formData.email) newErrors.email = t("form.errors.email");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t("form.errors.invalidEmail");
    if (formData.password.length < 8)
      newErrors.password = t("form.errors.passwordLength");
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = t("form.errors.passwordMatch");
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = t("form.errors.dateOfBirth");
    if (!formData.gender) newErrors.gender = t("form.errors.gender");
    if (!formData.termsAccepted)
      newErrors.termsAccepted = t("form.errors.termsAccepted");

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => changeLanguage("en")}>
          English
        </button>
        <button type="button" onClick={() => changeLanguage("ar")}>
          العربية
        </button>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <InputField
            label={t("form.firstName")}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            label={t("form.lastName")}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <InputField
            label={t("form.email")}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label={t("form.password")}
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InputField
            label={t("form.confirmPassword")}
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <InputField
            label={t("form.dateOfBirth")}
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            error={errors.dateOfBirth}
          />
          <RadioButton
            name="gender"
            label={t("form.gender.label")}
            options={[
              t("form.gender.male"),
              t("form.gender.female"),
              t("form.gender.other"),
            ]}
            value={formData.gender}
            onChange={handleChange}
            error={errors.gender}
          />
          <CheckboxField
            label={t("form.termsAccepted")}
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            error={errors.termsAccepted}
          />

          <button type="submit">{t("form.submit")}</button>
        </form>
      ) : (
        <Summary formData={formData} />
      )}
    </div>
  );
};

export default Form;
