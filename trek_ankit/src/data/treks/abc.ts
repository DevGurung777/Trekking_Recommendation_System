import type { Trek } from "../../types/trek";

const abc: Trek = {
  id: "abc",
  name: "Annapurna Base Camp Trek",
  route: "/routes/abc.geojson",

  start: {
    name: "Chhomrong",
    coordinates: [83.818388, 28.420183], // [longitude, latitude]
  },

  end: {
    name: "Annapurna Base Camp",
    coordinates: [83.8767, 28.5305], // [longitude, latitude]
  },

  duration: "5 Days",
  elevation: 4130,
};

export default abc;