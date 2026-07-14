import maplibregl from "maplibre-gl";

type MarkerData = {
  name: string;
  coordinates: [number, number];
};

export function addMarker(
  map: maplibregl.Map,
  marker: MarkerData,
  color: string
) {
  new maplibregl.Marker({ color })
    .setLngLat(marker.coordinates)
    .setPopup(
      new maplibregl.Popup().setHTML(`
        <h3>${marker.name}</h3>
      `)
    )
    .addTo(map);
}