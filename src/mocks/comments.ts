import { TComment } from '../types/comments';

export const comments: TComment[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: new Date(2023, 3, 10),
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b63a',
    date: new Date(2023, 5, 11),
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 3
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b64a',
    date: new Date(2024, 1, 15),
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://i.pravatar.cc/150?img=10',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1
  }
];
