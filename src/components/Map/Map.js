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
  const caveDeMamie = { lat: 45.53306198120117, lng: -73.60564422607422};
  const vinoRama = { lat: 45.53065872192383, lng: -73.60821533203125};
  const marelle = { lat: 45.52910232543945, lng: -73.6109848022461};
  const mastard = { lat: 45.547176361083984, lng: -73.60295104980469};
  const elena = { lat: 45.46979904174805, lng: -73.5916748046875};
  const noraGray = { lat: 45.4931755065918, lng: -73.56848907470703};
  const gia = { lat: 45.477298736572266, lng: -73.59324645996094};
  const joeBeef = { lat: 45.483062744140625, lng: -73.57527160644531};
  const liverpool = { lat: 45.48296356201172, lng: -73.57537841796875};
  const vinPapillon = { lat: 45.4827880859375, lng: -73.57557678222656};
  
  

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
            <AdvancedMarker position={caveDeMamie} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={caveDeMamie} onCloseClick={() => setOpen(false)}>
                <p>La Cave de Mamie</p>
                <p>322 Rue Beaubien E,</p>
                <p>Montréal, QC H2S 1R8</p>
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
            <AdvancedMarker position={marelle} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={marelle} onCloseClick={() => setOpen(false)}>
                <p>La Marelle</p>
                <p>129 Rue Beaubien O,</p>
                <p>Montréal, QC H2V 1C3</p>
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
            <AdvancedMarker position={elena} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={elena} onCloseClick={() => setOpen(false)}>
                <p>Elena</p>
                <p>5090 R. Notre Dame O,</p>
                <p>Montréal, QC H4C 1T1</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={noraGray} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={noraGray} onCloseClick={() => setOpen(false)}>
                <p>Nora Gray</p>
                <p>1391 Rue Saint-Jacques,</p>
                <p>Montréal, QC H3C 1H2</p>
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
             <AdvancedMarker position={liverpool} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={liverpool} onCloseClick={() => setOpen(false)}>
                <p>Liverpool House</p>
                <p>2501 R. Notre Dame O,</p>
                <p>Montréal, QC H3J 1N6</p>
             </InfoWindow>
            )}
             <AdvancedMarker position={vinPapillon} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={vinPapillon} onCloseClick={() => setOpen(false)}>
                <p>Le Vin Papillon</p>
                <p>2519 R. Notre Dame O,</p>
                <p>Montréal, QC H3J 1N4</p>
             </InfoWindow>
            )}
             <AdvancedMarker position={joeBeef} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {open && (
              <InfoWindow position={joeBeef} onCloseClick={() => setOpen(false)}>
                <p>Joe Beef</p>
                <p>2491 R. Notre Dame O,</p>
                <p> Montréal, QC H3J 1N6</p>
             </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </article>  
  );
}

export default MapComp;