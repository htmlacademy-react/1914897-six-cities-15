import { CITIES } from '../const';


export const LOCATIONS: {id: number; title: string; src: string }[] = CITIES.map((item, index) => ({
  id: index + 1,
  title: item,
  src: '#',
}));
