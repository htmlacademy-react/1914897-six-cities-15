import { TOfferStart } from '../types/offers';

export const favoriteOffers: TOfferStart[] = [
  {
    id: '1',
    title: 'Тестовое название :)',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'https://url-to-image/image.png',
  }
];
