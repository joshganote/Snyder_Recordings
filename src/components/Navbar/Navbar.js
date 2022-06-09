import React, { useContext } from "react";
import { ContentContext } from "../../util/contentContext";
import snyderLogoBlue from "../../assets/logo/SVGS/SRrecordings.svg";

import "./Navbar.css";

export const Navbar = () => {
  const content = useContext(ContentContext);
  return (
    <div style={{ position: "fixed", zIndex: 10, width: "100%" }}>
      <div className="nav-container">
        <img src={snyderLogoBlue} alt="snyder recordings logo" className="logo" />
        <div className="link-container">
          {content.navbar.route.map((link, index) => (
            <div key={index} className="nav-links">
              <img src={link.icon} alt="nav icon" />
              <a className="links" href={link.path}>
                {link.name}
              </a>
            </div>
          ))}
        </div>
        <a className="sign-up links" href={content.navbar.signUp.path}>
          {content.navbar.signUp.name}
        </a>
      </div>
    </div>
  );
};
