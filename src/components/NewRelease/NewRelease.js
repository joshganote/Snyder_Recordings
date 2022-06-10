import React, { useContext } from "react";
import { ContentContext } from "../../util/contentContext";
import "./NewRelease.css";

export const NewRelease = () => {
  const content = useContext(ContentContext);
  return (
    <div>
      <p>{content.newRelease.header}</p>
      <p>{content.newRelease.subHeader}</p>

      <div>
        {content.newRelease.release.map((item, index) => (
          <>
            <p>{item.album}</p>
            <p>{item.artist}</p>
            <p>{item.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};
