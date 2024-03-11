import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Setting } from './const';
import { offers } from './mocks/offers';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      cardAmount={Setting.CardsTotal}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>
);
