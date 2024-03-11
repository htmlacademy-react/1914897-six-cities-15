import { MainPage } from '../pages/main-page';
import { AppRoute, AuthorizationStatus } from './router/routes/routes';
import { NotFoundPage } from '../pages/not-found-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';
import { LoginPage } from '../pages/login-page/login-page';
import { FavoritesPage } from '../pages/favorites-page';
import { OfferPage } from '../pages/offer-page';
import { PrivateRoute } from './router/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { TOfferFull } from '../types/offers';
import { TComment } from '../types/comments';

export type TAppProps = {
  cardAmount: number;
  offers: TOfferFull[];
  comments: TComment[];
};

export const App: FC<PropsWithChildren<TAppProps>> = ({ cardAmount, offers, comments }) => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          index element={<MainPage cardAmount={cardAmount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              offers={offers}
              comments={comments}
            />
          }
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
