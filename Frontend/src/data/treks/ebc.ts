import type { Trek } from "../../types/trek";

const ebc: Trek = {
  id: "ebc",
  name: "Everest Base Camp Trek",
  route: "/routes/ebc.geojson",

  start: {
    name: "Lukla",
    coordinates: [86.7297, 27.6881], // [longitude, latitude]
  },

  end: {
    name: "Everest Base Camp",
    coordinates: [86.8570, 28.0043], // [longitude, latitude]
  },

  duration: "12 Days",
  elevation: 5364,
};

export default ebc;