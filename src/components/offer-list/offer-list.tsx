import { FC} from 'react';
import { OfferCard } from '../offer-card';
import { TOfferFull } from '../../types/offers';

type TOfferListProps = {
  cardHoverHandler: () => void;
  offers: TOfferFull[];
}

export const OfferList: FC<TOfferListProps> = ({ offers, cardHoverHandler }) => (
  <div className='cities__places-list places__list tabs__content'>
    {
      offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          hoverHandler={cardHoverHandler}
        />)
      )
    }
  </div>
);
