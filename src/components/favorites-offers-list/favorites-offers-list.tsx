import { TOfferStart } from '../../types/offers';
import { FC } from 'react';
import { AppRoute } from '../../app/router/routes/routes';
import { capitalizeFirstLetter } from '../../utils';
import { Link } from 'react-router-dom';

type TFavoritesList = {
  favoriteOffers: TOfferStart[];
};

export const FavoritesOffersList: FC<TFavoritesList> = ({ favoriteOffers }) => (
  <div className="favorites__places">
    {
      favoriteOffers.map((item) => (
        <article className="favorites__card place-card" key={item.id}>
          {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}

          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`${AppRoute.Offer}/${item.id}`}>
              <img
                className="place-card__image"
                src="img/apartment-small-03.jpg"
                width={150}
                height={110}
                alt="Place image"
              />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{item.price}</b>
                <span className="place-card__price-text">
                    /&nbsp;night
                </span>
              </div>
              <button
                className={`
                    place-card__bookmark-button
                    ${item.isFavorite && ('place-card__bookmark-button--active')}
                    button
                  `}
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: '100%' }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`${AppRoute.Offer}/${item.id}`}>
                {item.title}
              </Link>
            </h2>
            <p className="place-card__type">{capitalizeFirstLetter(item.type)}</p>
          </div>
        </article>
      ))
    }
  </div>
);
