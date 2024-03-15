import { FC } from 'react';
import { TOfferStart } from '../../types/offers';
import { FavoritesOffersList } from '../favorites-offers-list';
import { Link } from 'react-router-dom';

export type TFavoriteLocation = {
  locationName: string;
  locationLink: string;
  offers: TOfferStart[];
};

export type TFavoriteLocationOffers = {
  location: TFavoriteLocation;
};

export const FavoriteLocationOffers: FC<TFavoriteLocationOffers> = ({ location }) => {
  if(!location.offers.length) {
    return '';
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={location.locationLink}>
            <span>{location.locationName}</span>
          </Link>
        </div>
      </div>

      <FavoritesOffersList favoriteOffers={location.offers} />
    </li>
  );
};


