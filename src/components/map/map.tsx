import { FC, useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Nullable } from 'vitest';
import { TCity, TOfferFull } from '../../types/offers';
import { useMap } from '../../hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

export type TMapProps = {
  city: TCity;
  offers: TOfferFull[];
  activeOffer: Nullable<TOfferFull>;
};


export const Map: FC<TMapProps> = ({ city, offers, activeOffer }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: activeOffer && offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  }, [activeOffer, currentCustomIcon, defaultCustomIcon, map, offers, city]);

  return (
    <section className="cities__map map" ref={mapRef} style={{height: '100%'}} />
  );
};
