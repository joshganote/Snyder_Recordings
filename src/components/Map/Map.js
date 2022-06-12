import React, { useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { mapStyles } from "./GoogleMapStyles";
import mapMarker from "../../assets/Icons/SVGs/location_pin.svg";

import "./Map.css";

const containerStyle = {
  left: "0",
  top: "0",
  height: "100%",
  width: "100%",
  position: "absolute",
};

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAyiDlOTzvE7z9SyZI61cHu3bgLxr1VPlI",
  });

  const center = useMemo(() => ({ lat: 38.970638, lng: -94.704292 }), []);

  return isLoaded ? (
    <div className="resp">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
          keyboardShortcuts: false,
          draggable: false,
          scaleControl: true,
          scrollwheel: true,
          styles: mapStyles,
        }}
      >
        <>
          <Marker position={center} icon={mapMarker} />
        </>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
