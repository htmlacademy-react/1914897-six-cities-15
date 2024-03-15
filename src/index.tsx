import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { offers } from './mocks/offers';
import { comments } from './mocks/comments';
import { favoriteOffers } from './mocks/favorites-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      offers={offers}
      comments={comments}
      favoriteOffers={favoriteOffers}
    />
  </React.StrictMode>
);
