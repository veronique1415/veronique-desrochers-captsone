"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import "./Map.scss"

const MapComp = () => {
  //position for map and restaurants locations
  const position = { lat: 45.508888, lng: -73.561668 };
  const vinMonLapin = { lat: 45.53300094604492, lng: -73.61061096191406};
  const salleClim = { lat: 45.53026580810547, lng: -73.60887908935547};
  const vinoRama = { lat: 45.53065872192383, lng: -73.60821533203125};
  const mastard = { lat: 45.547176361083984, lng: -73.60295104980469};
  const gia = { lat: 45.477298736572266, lng: -73.59324645996094};

  //state for information window
  const [open, setOpen] = useState(false);

  return (
    <article className="map__container">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
        <div className="map">
          <Map zoom={13} center={position} mapId={process.env.REACT_APP_GOOGLE_MAPS_STYLE}>
            <AdvancedMarker position={vinMonLapin} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={vinMonLapin} onCloseClick={() => setOpen(false)}>
                <p>Mon Lapin</p>
                <p>150 Rue Saint-Zotique East,</p>
                <p>Montréal, QC H2S 1K8</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={salleClim} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={salleClim} onCloseClick={() => setOpen(false)}>
                <p>Salle Climatisée</p>
                <p>6448 Boul. Saint-Laurent,</p>
                <p>Montréal, QC H2S 3C4</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={vinoRama} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={vinoRama} onCloseClick={() => setOpen(false)}>
                <p>Vino Rama</p>
                <p>Rue Beaubien Est,</p>
                <p>Montréal, QC H2S 3C4</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={mastard} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={mastard} onCloseClick={() => setOpen(false)}>
                <p>Mastard</p>
                <p>1879 Rue Bélanger,</p>
                <p>Montréal, QC H2G 1B6</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={gia} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={gia} onCloseClick={() => setOpen(false)}>
                <p>Gia Vin & Grill</p>
                <p>1025 Rue Lenoir,</p>
                <p>Montréal, QC H4C 2Z6</p>
             </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </article>  
  );
}

export default MapComp;