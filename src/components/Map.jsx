import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import "@maptiler/geocoding-control/style.css";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const zoom = 15;
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

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
      .setPopup(new maptilersdk.Popup().setHTML("Traditional Tea Sets Anzuri"))
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#2CDA9D" })
      .setLngLat([139.74, 35.69])
      .setPopup(new maptilersdk.Popup().setHTML("Tokyo Souvenir Mimoto"))
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#2CDA9D" })
      .setLngLat([139.71, 35.71])
      .setPopup(new maptilersdk.Popup().setHTML("SHIBUYA Souvenirs"))
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#2CDA9D" })
      .setLngLat([139.74, 35.68])
      .setPopup(new maptilersdk.Popup().setHTML("KYOTOTO"))
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#2CDA9D" })
      .setLngLat([8.432436222, 47.14508040683401])
      .setPopup(new maptilersdk.Popup().setHTML("Cool HSLU store"))
      .addTo(map.current);

    // Initialize and add the GeocodingControl (search bar)
    const geocodingControl = new GeocodingControl({
      apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
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
