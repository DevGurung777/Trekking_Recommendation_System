export interface Trek {
  id: string;
  name: string;
  route: string;

  start: {
    name: string;
    coordinates: [number, number];
  };

  end: {
    name: string;
    coordinates: [number, number];
  };

  duration: string;
  elevation: number;
}