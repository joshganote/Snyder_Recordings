import React, { useContext } from "react";
import { ContentContext } from "../../util/contentContext";
import snyderLogoBlue from "../../assets/logo/SVGS/SRRecordings_white.svg";

import "./Footer.css";

export const Footer = () => {
  const content = useContext(ContentContext);

  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-section">
          <div className="address-section">
            <img src={snyderLogoBlue} alt="snyder recordings logo" className="footer-logo" />
            <p>{content.footer.address.street}</p>
            <p>{content.footer.address.city}</p>
            <p>{content.footer.address.zipCode}</p>
            <p>{content.footer.address.phone}</p>
          </div>
          <div className="section-col">
            <p className="headers">{content.footer.explore.header.toUpperCase()}</p>
            {content.footer.explore.links.map((x, index) => (
              <a key={index} href={x.path}>
                {x.name}
              </a>
            ))}
          </div>
          <div className="section-col">
            <p className="headers">{content.footer.music.header.toUpperCase()}</p>
            {content.footer.music.links.map((x, index) => (
              <a key={index} href={x.path}>
                {x.name}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <div className="section-col">
            <p className="headers">{content.footer.artists.header.toUpperCase()}</p>
            {content.footer.artists.links.map((x, index) => (
              <a key={index} href={x.path}>
                {x.name}
              </a>
            ))}
          </div>
          <div className="section-col">
            <p className="headers">{content.footer.records.header.toUpperCase()}</p>
            {content.footer.records.links.map((x, index) => (
              <a key={index} href={x.path}>
                {x.name}
              </a>
            ))}
          </div>
          <div className="section-col">
            <p className="headers">{content.footer.concerts.header.toUpperCase()}</p>
            {content.footer.concerts.links.map((x, index) => (
              <a key={index} href={x.path}>
                {x.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="divider"></div>
        <div className="footer-bottom">
          <div className="bottom-left">
            {content.footer.privacy.map((p, index) => (
              <a href={p.path} key={index}>
                {p.name}
              </a>
            ))}
          </div>
          <div className="bottom-right">
            {content.footer.iconList.map((i, index) => (
              <img src={i.icon} alt={i.name} className="p-left-22" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
