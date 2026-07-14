import ghorepani from "./ghorepani";
import abc from "./abc";
import ebc from "./ebc";

const treks = {
  ghorepani,
  abc,
  ebc,
} as const;

export default treks;

export type GeoTrekKey = keyof typeof treks;

export const TREK_ID_MAP: Record<string, GeoTrekKey> = {
  "everest-base-camp": "ebc",
  "annapurna-circuit": "abc",
};