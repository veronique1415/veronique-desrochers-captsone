"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  const [vlOpen, vlSetOpen] = useState(false);
  const [slOpen, slSetOpen] = useState(false);
  const [cmOpen, cmSetOpen] = useState(false);
  const [vinoOpen, vinoSetOpen] = useState(false);
  const [marOpen, marSetOpen] = useState(false);
  const [masOpen, masSetOpen] = useState(false);
  const [elOpen, elSetOpen] = useState(false);
  const [noOpen, noSetOpen] = useState(false);
  const [gOpen, gSetOpen] = useState(false);
  const [liOpen, liSetOpen] = useState(false);
  const [vpOpen, vpSetOpen] = useState(false);
  const [jbOpen, jbSetOpen] = useState(false);

  return (
    <article className="map__container">
        <Container className="mw-40">
          <Row>
            <Col>
              <ul className="map__list"> Mile-end & Little Italy
                <li className="map__items map__items--1">Mon Lapin</li>
                <li className="map__items">Salle Climatisée</li>
                <li className="map__items">Vino Rama</li>
                <li className="map__items">La Cave de Mamie</li>
                <li className="map__items">Mastard</li>
                <li className="map__items">La Marelle</li>
                </ul>
                <ul className="map__list"> Little Burgundy & Saint-Henri
                <li className="map__items map__items--1">Joe Beef</li>
                <li className="map__items">Liverpool House</li>
                <li className="map__items">Le Vin Papillon</li>
                <li className="map__items">Nora noraGray</li>
                <li className="map__items">Elena</li>
                <li className="map__items">Gia</li>
                </ul>
            </Col>
          </Row>
        </Container>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
        <div className="map">
          <Map zoom={13} center={position} mapId={process.env.REACT_APP_GOOGLE_MAPS_STYLE}>
            <AdvancedMarker position={vinMonLapin} onClick={() => vlSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {vlOpen && (
              <InfoWindow position={vinMonLapin} onCloseClick={() => vlSetOpen(false)}>
                <p>Mon Lapin</p>
                <p>150 Rue Saint-Zotique East,</p>
                <p>Montréal, QC H2S 1K8</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={salleClim} onClick={() => slSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {slOpen && (
              <InfoWindow position={salleClim} onCloseClick={() => slSetOpen(false)}>
                <p>Salle Climatisée</p>
                <p>6448 Boul. Saint-Laurent,</p>
                <p>Montréal, QC H2S 3C4</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={caveDeMamie} onClick={() => cmSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {cmOpen && (
              <InfoWindow position={caveDeMamie} onCloseClick={() => cmSetOpen(false)}>
                <p>La Cave de Mamie</p>
                <p>322 Rue Beaubien E,</p>
                <p>Montréal, QC H2S 1R8</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={vinoRama} onClick={() => vinoSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {vinoOpen && (
              <InfoWindow position={vinoRama} onCloseClick={() => vinoSetOpen(false)}>
                <p>Vino Rama</p>
                <p>Rue Beaubien Est,</p>
                <p>Montréal, QC H2S 3C4</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={marelle} onClick={() => marSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {marOpen && (
              <InfoWindow position={marelle} onCloseClick={() => marSetOpen(false)}>
                <p>La Marelle</p>
                <p>129 Rue Beaubien O,</p>
                <p>Montréal, QC H2V 1C3</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={mastard} onClick={() => masSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {masOpen && (
              <InfoWindow position={mastard} onCloseClick={() => masSetOpen(false)}>
                <p>Mastard</p>
                <p>1879 Rue Bélanger,</p>
                <p>Montréal, QC H2G 1B6</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={elena} onClick={() => elSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {elOpen && (
              <InfoWindow position={elena} onCloseClick={() => elSetOpen(false)}>
                <p>Elena</p>
                <p>5090 R. Notre Dame O,</p>
                <p>Montréal, QC H4C 1T1</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={noraGray} onClick={() => noSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {noOpen && (
              <InfoWindow position={noraGray} onCloseClick={() => noSetOpen(false)}>
                <p>Nora Gray</p>
                <p>1391 Rue Saint-Jacques,</p>
                <p>Montréal, QC H3C 1H2</p>
             </InfoWindow>
            )}
            <AdvancedMarker position={gia} onClick={() => gSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {gOpen && (
              <InfoWindow position={gia} onCloseClick={() => gSetOpen(false)}>
                <p>Gia Vin & Grill</p>
                <p>1025 Rue Lenoir,</p>
                <p>Montréal, QC H4C 2Z6</p>
             </InfoWindow>
            )}
             <AdvancedMarker position={liverpool} onClick={() => liSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {liOpen && (
              <InfoWindow position={liverpool} onCloseClick={() => liSetOpen(false)}>
                <p>Liverpool House</p>
                <p>2501 R. Notre Dame O,</p>
                <p>Montréal, QC H3J 1N6</p>
             </InfoWindow>
            )}
             <AdvancedMarker position={vinPapillon} onClick={() => vpSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {vpOpen && (
              <InfoWindow position={vinPapillon} onCloseClick={() => vpSetOpen(false)}>
                <p>Le Vin Papillon</p>
                <p>2519 R. Notre Dame O,</p>
                <p>Montréal, QC H3J 1N4</p>
             </InfoWindow>
            )}
             <AdvancedMarker position={joeBeef} onClick={() => jbSetOpen(true)}>
              <Pin />
            </AdvancedMarker>

            {jbOpen && (
              <InfoWindow position={joeBeef} onCloseClick={() => jbSetOpen(false)}>
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