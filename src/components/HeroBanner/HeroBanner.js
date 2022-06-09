import React, { useContext } from "react";
import { ContentContext } from "../../util/contentContext";
import "./HeroBanner.css";

export const HeroBanner = () => {
  const content = useContext(ContentContext);

  const handleClick = () => {
    /**
     * Perform task
     */
  };

  return (
    <div className="hero-banner">
      <div className="hero-wrapper">
        <p className="a-m-paradox">{content.hero.header.name}</p>
        <p className="christopher-brent-wo">{content.hero.description.description}</p>
        <div className="hero-play" onClick={handleClick}>
          <img src={content.hero.playIcon} alt="play button" className="group-4-copy-4" />
          <p className="watch-video">{content.hero.watchVideo.watch}</p>
        </div>
      </div>
    </div>
  );
};
