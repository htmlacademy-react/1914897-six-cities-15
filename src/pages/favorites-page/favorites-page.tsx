import { Helmet } from 'react-helmet-async';
import { TOfferStart } from '../../types/offers';
import { FC } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { FavoritesEmptyPage } from '../favorites-empty-page';
import { FavoriteLocationList } from '../../components/favorite-location-list/favorite-location-list';

type TFavoritesProps = {
  favoriteOffers: TOfferStart[];
}

export const FavoritesPage: FC<TFavoritesProps> = ({ favoriteOffers }) => {

  if(favoriteOffers.length === 0) {
    return (
      <FavoritesEmptyPage/>
    );
  }

  return (
    <>
      <Header/>
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <FavoriteLocationList favorites={favoriteOffers}/>
      <Footer/>
    </>
  );
};
