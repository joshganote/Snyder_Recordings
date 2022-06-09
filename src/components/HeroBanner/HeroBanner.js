import React from "react";
import play from "../../assets/Icons/SVGs/playbutton.svg";
import "./HeroBanner.css";

export const HeroBanner = () => {
  const handleClick = () => {
    /**
     * Perform task
     */
  };

  return (
    <div className="hero-banner">
      <div className="hero-wrapper">
        <p className="a-m-paradox">A.M. Paradox</p>

        <p className="christopher-brent-wo">
          Christopher Brent Wood, better known by his stage name Brent Faiyaz, is an American singer
          and record producer. He released his debut project, an extended play entitled A.M.
          Paradox, in 2016.
        </p>

        <div className="hero-play" onClick={handleClick}>
          <img src={play} alt="play button" className="group-4-copy-4" />
          <p className="watch-video">Watch Video</p>
        </div>
      </div>
    </div>
  );
};
