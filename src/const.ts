import { TCity } from './types/offers';

export const Setting = {
  CardsTotal: 4,
};

export const REVIEW_MAX_LENGTH = 300;
export const REVIEW_MIN_LENGTH = 50;

export const LEAFLET_MAP_LAYERS = {
  voyager: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
};

export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


export const CITIES: string[] = ['Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Rating = [
  {value: 5, label: 'perfect' },
  {value: 4, label: 'good' },
  {value: 3, label: 'not bad' },
  {value: 2, label: 'badly' },
  {value: 1, label: 'terribly' },
];

export const City: TCity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.380955,
    longitude: 4.939334,
    zoom: 9
  }
};

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
