import { TOfferFull } from '../types/offers';
import { Cities } from '../const';

export const offers: TOfferFull[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name:  Cities.Amsterdam ,
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
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel',
    price: 120,
    city: {
      name:  Cities.Brussels,
      location: {
        latitude: 54.35514938496378,
        longitude: 5.673877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 54.35514938496378,
      longitude: 5.673877537499948,
      zoom: 10
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://url-to-image/image.png',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      'Heating', 'WiFi'
    ],
    host: {
      name: 'Pol Atreides',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 3
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Beautiful & luxurious studio at great location',
    type: 'house',
    price: 400,
    city: {
      name:  Cities.Hamburg,
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
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'https://url-to-image/image.png',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 7,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Billie Harrington',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 12
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'room',
    price: 90,
    city: {
      name:  Cities.Dusseldorf,
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
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: 'https://url-to-image/image.png',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Spanch Bob',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 2
  }
];
