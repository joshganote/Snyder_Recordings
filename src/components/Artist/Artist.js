import React, { useContext } from "react";
import { ContentContext } from "../../util/contentContext";
import ArtistImg from "../../assets/Images/image2.png";

import "./Artist.css";

export const Artist = () => {
  const content = useContext(ContentContext);

  const handleClick = () => {
    /**
     * Perform task
     */
  };

  return (
    <div className="artist-section">
      <div className="test4">
        <img src={ArtistImg} alt="artist pic" className="artist-img" />
        <div className="artist-info">
          <p className="artist-header">{content.artist.header}</p>
          <p className="artist-bio">{content.artist.bio}</p>
          <button onClick={handleClick} className="learn-btn">
            {content.artist.learnMore}
          </button>
        </div>
      </div>
    </div>
  );
};
