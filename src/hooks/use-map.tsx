import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { TCity } from '../types/offers';
import { LEAFLET_MAP_LAYERS, MAP_ATTRIBUTION } from '../const';

type TUseMap = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: TCity;
}

export const useMap = ({mapRef, city}: TUseMap) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(LEAFLET_MAP_LAYERS.voyager, {attribution: MAP_ATTRIBUTION});
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, city]);

  return map;
};
