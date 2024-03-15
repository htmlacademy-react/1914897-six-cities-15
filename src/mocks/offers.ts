import { TOfferFull } from '../types/offers';

export const offers: TOfferFull[] = [
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
    description: 'У капибары нет хвоста; Живут они целыми группами, примерно от 20 до 30 капибар. И они очень общительны. Общаются капибары звуками. Общаются между собой они словно стрекочат, или посвистывают. Если капибарам угрожает опасность, они начинают тявкать, сообщая это остальным сородичам. Более взрослые особи защищают младших; Капибары размножаются в течение всего года, но обычно спариваются они в сезон дождей.',
    bedrooms: 4,
    goods: [
      'Heating',
      'Wi-Fi'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      isPro: true,
    },
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel',
    price: 120,
    city: {
      name: 'Brussels',
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
      avatarUrl: 'https://i.pravatar.cc/150?img=1 ',
      isPro: true
    },
    images: [
      'https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    maxAdults: 3
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Beautiful & luxurious studio at great location',
    type: 'house',
    price: 400,
    city: {
      name: 'Hamburg',
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
      avatarUrl: 'https://i.pravatar.cc/150?img=10',
      isPro: true
    },
    images: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    maxAdults: 12
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'room',
    price: 90,
    city: {
      name: 'Dusseldorf',
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
    isPremium: true,
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
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    maxAdults: 2
  }
];
