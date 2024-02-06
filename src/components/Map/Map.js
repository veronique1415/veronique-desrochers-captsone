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
  const position = { lat: 45.52910232543945, lng: -73.6109848022461 };
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
        <div className="map__list-box">
              <ul className="map__list"> Mile-end & Little Italy
                <li className="map__items map__items--1" onClick={() => vlSetOpen(true)}>Mon Lapin
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Mon+Lapin/@45.533007,-73.6132232,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc9196da59b9c11:0xb54ca374bd37d150!8m2!3d45.533007!4d-73.6106429!16s%2Fg%2F11f3th9s0j?entry=ttu">150 Rue Saint-Zotique East, Montréal, QC H2S 1K8</a></p>
                </li>
                <li className="map__items" onClick={() => slSetOpen(true)}>Salle Climatisée
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Salle+Climatis%C3%A9e/@45.5302517,-73.6114648,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc919578561938f:0xc53e22a17a26cd5a!8m2!3d45.5302517!4d-73.6088845!16s%2Fg%2F11m_wrlzqq?entry=ttu">6448 Boul. Saint-Laurent, Montréal, QC H2S 3C4</a></p>
                </li>
                <li className="map__items" onClick={() => vinoSetOpen(true)}>Vino Rama
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Vino+Rama+Montr%C3%A9al/@45.5306657,-73.6082385,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91931088aed81:0x8fcabf53caa23d77!8m2!3d45.5306657!4d-73.6082385!16s%2Fg%2F11pzfnlx54?entry=ttu">29 Rue Beaubien E, Montréal, QC H2S 1P7</a></p>
                </li>
                <li className="map__items" onClick={() => cmSetOpen(true)}>La Cave de Mamie
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/La+Cave+de+Mamie/@45.533051,-73.6082443,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc9196af08e5137:0x37ce6ef241df63d0!8m2!3d45.5330473!4d-73.6056747!16s%2Fg%2F11tdmy5dd_?entry=ttu">322 Rue Beaubien E, Montréal, QC H2S 1R8</a></p>
                </li>
                <li className="map__items" onClick={() => masSetOpen(true)}>Mastard
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Restaurant+Mastard/@45.5471719,-73.605505,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91912464a42a5:0xfd59130687279f23!8m2!3d45.5471682!4d-73.6029354!16s%2Fg%2F11qp_f83q8?entry=ttu">1879 Rue Bélanger, Montréal, QC H2G 1B6</a></p>
                </li>
                <li className="map__items" onClick={() => marSetOpen(true)}>La Marelle
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/La+Marelle/@45.5291119,-73.6135741,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc919d81bf2c543:0x966e874f15a41d5e!8m2!3d45.5291082!4d-73.6110045!16s%2Fg%2F11lcs12gfv?entry=ttu">129 Rue Beaubien O, Montréal, QC H2V 1C3</a></p>
                </li>
                </ul>
                <ul className="map__list"> Little Burgundy & Saint-Henri
                <li className="map__items map__items--1" onClick={() => jbSetOpen(true)}>Joe Beef
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Joe+Beef/@45.4830593,-73.5778474,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a7a23de0961:0x4dda44b6c1dd33da!8m2!3d45.4830556!4d-73.5752778!16s%2Fm%2F0j9kdsm?entry=ttu">2491 R. Notre Dame O, Montréal, QC H3J 1N6</a></p>
                </li>
                <li className="map__items" onClick={() => liSetOpen(true)}>Liverpool House
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Liverpool+House/@45.4830588,-73.5855722,15z/data=!4m10!1m2!2m1!1sliverpool!3m6!1s0x4cc91a7a21a788fb:0x3a63f683ac77fae!8m2!3d45.4829994!4d-73.575425!15sCglsaXZlcnBvb2wiA4gBAVoLIglsaXZlcnBvb2ySARNjYW5hZGlhbl9yZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJLZDNKWWRFSjNFQUXgAQA!16s%2Fg%2F1tp26x5r?entry=ttu">2501 R. Notre Dame O, Montréal, QC H3J 1N6</a></p>
                </li>
                <li className="map__items" onClick={() => vpSetOpen(true)}>Le Vin Papillon
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Le+Vin+Papillon/@45.4827888,-73.5804421,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a7a207c556d:0xa0e82d6c52920693!8m2!3d45.4827889!4d-73.5755712!16s%2Fg%2F1pp2v0bx5?entry=ttu">2519 R. Notre Dame O, Montréal, QC H3J 1N4</a></p>
                </li>
                <li className="map__items" onClick={() => noSetOpen(true)}>Nora Gray
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Nora+Gray/@45.4931762,-73.5711147,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a665a231fa1:0xe2e7b9bb0b03791a!8m2!3d45.4931762!4d-73.5685398!16s%2Fg%2F1hc75pmfq?entry=ttu">1391 Rue Saint-Jacques, Montréal, QC H3C 1H2</a></p>
                </li>
                <li className="map__items" onClick={() => elSetOpen(true)}>Elena
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Elena/@45.4698292,-73.594287,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc911e0fbb9b3a1:0x280b13d5103b90e!8m2!3d45.4698292!4d-73.5917121!16s%2Fg%2F11hb008v98?entry=ttu">5090 R. Notre Dame O, Montréal, QC H4C 1T1</a></p>
                </li>
                <li className="map__items"onClick={() => gSetOpen(true)}>Gia Vin & Grill
                <p className="mobile--map"><a className="map__address" href="https://www.google.com/maps/place/Gia+Vin+%26+Grill/@45.4772603,-73.5981313,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc911a3903022cf:0x236049879baa63db!8m2!3d45.4772604!4d-73.5932604!16s%2Fg%2F11rjrz88ks?entry=ttu">1025 Rue Lenoir, Montréal, QC H4C 2Z6</a></p>
                </li>
                </ul>
        </div>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
        <div className="map tablet--map">
          <Map zoom={12} center={position} mapId={process.env.REACT_APP_GOOGLE_MAPS_STYLE}>
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