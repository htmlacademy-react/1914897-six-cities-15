/* eslint-disable react/no-array-index-key */
import { Helmet } from 'react-helmet-async';
import { FC } from 'react';
import { TOfferFull } from '../../types/offers';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '../not-found-page';
import { capitalizeFirstLetter } from '../../utils';
import { CommentsList } from '../../components/comments-list/comments-list';
import { TComment } from '../../types/comments';
import { Header } from '../../components/header';
import { ReviewForm } from '../../components/review-form';
import { AuthorizationStatus } from '../../app/router/routes/routes';
import { NearOffers } from '../../components/near-offers';

type TOfferProps = {
  offers: TOfferFull[];
  comments: TComment[];
  authorizationStatus: AuthorizationStatus;
}

export const OfferPage: FC<TOfferProps> = ({ offers, comments, authorizationStatus }) => {
  const { id } = useParams();
  const currentOffer: TOfferFull | undefined = offers.find((offer: TOfferFull) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header></Header>
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                currentOffer.images.map((src, index) => (
                  <div className="offer__image-wrapper" key={index}>
                    <img className="offer__image"
                      src={src}
                      alt="Photo"
                    >
                    </img>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>)}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className={`offer__bookmark-button ${currentOffer.isFavorite && 'offer__bookmark-button--active'} button`} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ 'width': '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {currentOffer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{currentOffer.price}$</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">Whats inside</h2>
                <ul className="offer__inside-list">
                  {
                    currentOffer.goods.map((title, index) => (
                      <li className="offer__inside-item" key={index}>{title}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width={74} height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && <span className="offer__user-status">Pro</span> }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <CommentsList comments={comments}/>
                </ul>

                {
                  (authorizationStatus === AuthorizationStatus.Auth) && <ReviewForm/>
                }

              </section>
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <NearOffers/>
      </main>
    </div>
  );
};
