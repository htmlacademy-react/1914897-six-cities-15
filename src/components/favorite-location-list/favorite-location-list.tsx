import { FC } from 'react';
import { LOCATIONS } from '../../mocks/mock';
import { FavoriteLocationOffers } from '../favorite-location-offers';
import { TOfferStart } from '../../types/offers';
import { TFavoriteLocation } from '../favorite-location-offers/favorite-location-offers';

type TFavoriteLocationList = {
  favorites: TOfferStart[];
};

export const FavoriteLocationList: FC<TFavoriteLocationList> = ({ favorites }) => {
  const sortedFavoriteList: TFavoriteLocation[] = LOCATIONS.map((location) => ({
    locationName: location.title,
    locationLink: location.src,
    offers: favorites.filter((item) => (item.city.name === location.title)),
  }));


  return (
    <ul className='favorites__list'>
      {sortedFavoriteList.map((location) =>
        <FavoriteLocationOffers location={location} key={location.locationName} />
      )}
    </ul>
  );
};
