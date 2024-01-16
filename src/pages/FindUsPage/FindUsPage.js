"use client";

import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

const FindUsPage = () => {
const position = {lat: 45.53303527832031, lng: -73.6106185913086}

    return (
        <APIProvider apiKey={process.env.GOOGLE_MAPS_KEY}>
            <div>
                <Map zoom={9} center={position}></Map>
            </div>
        </APIProvider>
        
    )
}

export default FindUsPage;