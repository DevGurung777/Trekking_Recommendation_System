import type { Trek } from "../../types/trek";



const ghorepani : Trek= {
  id: "ghorepani",
  name: "Ghorepani Poon Hill Trek",

  route: "/routes/ghorepani.geojson",

    

  start: {
    name: "Ghandruk",
     coordinates: [83.807653, 28.377392] as [number, number],
  },

  end: {
    name: "Poon Hill",
    coordinates: [83.689307, 28.400219] as [number, number],
  },

  duration: "4 Days",
  elevation: 3210,
};

export default ghorepani;