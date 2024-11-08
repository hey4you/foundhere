import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import "@maptiler/geocoding-control/style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import Profile from "./Profile";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const zoom = 15;
  maptilersdk.config.apiKey = "0RIdnIp4oGo6HhkfVfWj";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#2CDA9D" })
      .setLngLat([139.7525, 35.6846])
      .setPopup(new maptilersdk.Popup().setHTML(<Profile />))
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#2CDA9D" })
      .setLngLat([139.74, 35.69])
      .addTo(map.current);

    // Initialize and add the GeocodingControl (search bar)
    const geocodingControl = new GeocodingControl({
      apiKey: "0RIdnIp4oGo6HhkfVfWj",
      maplibregl: maplibregl,
      flyTo: true, // Centers map on search result
    });
    map.current.addControl(geocodingControl, "top-left");
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map"></div>
    </div>
  );
}
