import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import type { Trek } from "../../types/trek";


 type TrekMapProps ={
  trek: Trek;
 };


const TrekMap = ({trek}: TrekMapProps )=> {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,

      style: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${
        import.meta.env.VITE_MAPTILER_API_KEY
      }`,

      // Temporary values
      center: [84, 28.4],
      zoom: 12,
    });

    map.on("load", async () => {
      // Load GeoJSON
      const response = await fetch(trek.route);
      const geojson = await response.json();

      // Add Source
      map.addSource(`${trek.id}`, {
        type: "geojson",
        data: geojson,
      });

      // Add Route Layer
      map.addLayer({
       id: `${trek.id}-route`,
        type: "line",
        source: trek.id,

        layout: {
          "line-cap": "round",
          "line-join": "round",
        },

        paint: {
          "line-color": "#f7B500",
          "line-width": 6,
          "line-opacity": 0.9,
        },
      });

      // ============================
      // Auto Zoom to Route
      // ============================

      const bounds = new maplibregl.LngLatBounds();

      geojson.features.forEach((feature: any) => {
        if (feature.geometry.type === "LineString") {
          feature.geometry.coordinates.forEach(
            (coord: [number, number]) => {
              bounds.extend(coord);
            }
          );
        }
      });


      const southwest = bounds.getSouthWest();
        const northeast = bounds.getNorthEast();


        const padding = 0.03;

        const restrictedBounds =new maplibregl.LngLatBounds(
          [southwest.lng - padding , southwest.lat - padding],
          [northeast.lng +padding,northeast.lat + padding]
        );
      map.fitBounds(bounds, {
        padding: 80,
       
        duration: 2000,
      });
      // Restrict map to trekking area
             map.setMaxBounds(restrictedBounds);

                // Optional: prevent zooming out too much
              map.setMinZoom(8);

      // ============================
      // Start Marker
      // ============================

      new maplibregl.Marker({ color: "green" })
        .setLngLat(trek.start.coordinates)
        .setPopup(
          new maplibregl.Popup().setText(
            trek.start.name
          )
        )
        .addTo(map);

      // ============================
      // End Marker
      // ============================

      new maplibregl.Marker({ color: "red" })
        .setLngLat(trek.end.coordinates)
        .setPopup(
          new maplibregl.Popup().setText(
            trek.end.name
          )
        )
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [trek]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-screen"
    />
  );
};

export default TrekMap;