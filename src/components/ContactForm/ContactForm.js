import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../../util/contentContext";
import artistPic from "../../assets/Images/image3.png";

import "./ContactForm.css";
import { ContactFormCard } from "./ContactFormCard";

export const ContactForm = () => {
  const content = useContext(ContentContext);
  const initialValues = { firstName: "", lastName: "", email: "", reason: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setFormValues(initialValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      alert("Please Enter Email");
    } else if (!regex.test(values.email)) {
      alert("Please Use Valid Email Format");
    }
    if (!values.message) {
      alert("Please Tell Us More About Your Project");
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setContactInfo(formValues);
  };

  return (
    <>
      <div className="contact-container">
        <div className="form-top">
          <p className="form-header">{content.contactForm.header}</p>
          <p className="form-subHeader">{content.contactForm.subHeader}</p>
          <ContactFormCard
            submit={handleSubmit}
            firstName={formValues.firstName}
            lastName={formValues.lastName}
            email={formValues.email}
            reason={formValues.reason}
            message={formValues.message}
            onChange={handleChange}
            button={content.contactForm.send}
          />
        </div>
        <img src={artistPic} alt="alt" className="img-test" />
      </div>
    </>
  );
};
