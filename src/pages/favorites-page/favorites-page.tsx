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
    <div className='page'>
      <Header/>
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoriteLocationList favorites={favoriteOffers}/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
