import React from "react";

export const ContactFormCard = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div className="row-one">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={props.firstName}
          onChange={props.onChange}
          className="input margin-r"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={props.lastName}
          onChange={props.onChange}
          className="input"
        />
      </div>
      <div className="row-two">
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={props.email}
          onChange={props.onChange}
          className="input margin-r"
        />
        <input
          type="text"
          placeholder="Reason For Contacting"
          name="reason"
          value={props.reason}
          onChange={props.onChange}
          className="input icon"
        />
      </div>
      <textarea
        className="message"
        placeholder="Write a brief message..."
        name="message"
        rows="6"
        value={props.message}
        onChange={props.onChange}
      ></textarea>
      <button type="submit" className="send-btn">
        {props.button}
      </button>
    </form>
  );
};
