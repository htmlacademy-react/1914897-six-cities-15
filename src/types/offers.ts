import { TUserHost } from './user';

export type TApartment = 'apartment' | 'room' | 'house' | 'hotel';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocation;
};

export type TOfferStart = {
  id: string;
  title: string;
  type: TApartment;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};


export type TOfferFull = TOfferStart & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUserHost;
  images: string[];
  maxAdults: number;
};
