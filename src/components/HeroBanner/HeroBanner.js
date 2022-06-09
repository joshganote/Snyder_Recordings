import React from "react";
import "./HeroBanner.css";

export const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-wrapper">
        <div className="hero-header">
          <p className="header-txt">A.M. Paradox</p>
        </div>

        <div className="hero-description">
          <p className="description-txt">
            Christopher Brent Wood, better known by his stage name Brent Faiyaz, is an American
            singer and record producer. He released his debut project, an extended play entitled
            A.M. Paradox, in 2016.
          </p>
        </div>

        <div className="hero-play">
          <p className="play-txt">Watch Video</p>
        </div>
      </div>
    </div>
  );
};
