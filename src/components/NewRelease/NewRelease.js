import React, { useContext } from "react";
import { ContentContext } from "../../util/contentContext";

import "./NewRelease.css";

export const NewRelease = () => {
  const content = useContext(ContentContext);

  /**
   * Hey I apologize for not being able to meet this requirement at this time. I was not able
   * to get a package from npm or other various places like YouTube or Stack Overflow to work. The
   * solution I was trying to work through in this file was for a carousel that displays only one
   * child element. I was trying to see if I could make it work for a list of child elements to
   * click through like in the designs. I spent the most amount of time on this part trying to make
   * it work but I hope that this is something I can learn from working closer with the Lifted
   * Logic team.
   */

  // const [current, setCurrent] = useState(0);
  // const length = content.newRelease.release.length;

  // const previous = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // const next = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  return (
    <>
      <div className="artist-container">
        <div className="release-top">
          <p className="release-header">{content.newRelease.header}</p>
          <p className="release-subHeader">{content.newRelease.subHeader}</p>
        </div>

        <div id="sup" className="release-bottom">
          {content.newRelease.release.map((item, index) => (
            <>
              {/* {current === index && ( */}
              <div className="artist-card" key={index}>
                <div className="album-container">
                  <img className="album-art" src={item.albumArt} alt="album art" />
                </div>
                <div className="release-info">
                  <p className="artist-album">{item.album}</p>
                  <p className="artist-name">{item.artist.toUpperCase()}</p>
                  <p className="artist-description">{item.description}</p>
                </div>
              </div>
              {/* )} */}
            </>
          ))}
        </div>

        <div className="toggle-release">
          <img
            // onClick={previous}
            className="play-left"
            src={content.newRelease.playIcon}
            alt="play button"
          />
          <img
            // onClick={next}
            className="play-right"
            src={content.newRelease.playIcon}
            alt="play button"
          />
        </div>
      </div>
    </>
  );
};
