import React, { useContext, useState, useEffect } from "react";
import { ContentContext } from "../../util/contentContext";
import artistPic from "../../assets/Images/image3.png";

import "./ContactForm.css";

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
    setFormValues(initialValues);
  };

  return (
    <>
      <div className="contact-container">
        <div className="form-top">
          <p className="form-header">{content.contactForm.header}</p>
          <p className="form-subHeader">{content.contactForm.subHeader}</p>
          <form onSubmit={handleSubmit}>
            <div className="row-one">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className="input margin-r"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="row-two">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="input margin-r"
              />
              <input
                type="text"
                placeholder="Reason For Contacting"
                name="reason"
                value={formValues.reason}
                onChange={handleChange}
                className="input icon"
              />
            </div>
            <textarea
              className="message"
              placeholder="Write a brief message..."
              name="message"
              rows="6"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="send-btn">
              {content.contactForm.send}
            </button>
          </form>
        </div>
        <img src={artistPic} alt="alt" className="img-test" />
      </div>
    </>
  );
};
