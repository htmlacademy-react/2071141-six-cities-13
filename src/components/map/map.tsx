import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Location, Offers } from '../../types/offer';
import useMap from '../../hooks/useMap/use-map';

type IconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

type MapProps = {
  block: string;
  location: Location;
  offers: Offers[];
  specialOfferId: Offers['id'] | null;
};

const defaultIconConfig: IconConfig = {
  url: '/img/pin.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40,
};

const activeIconConfig: IconConfig = {
  url: '/img/pin-active.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40,
};

function createIcon(config: IconConfig) {
  return new Icon({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY],
  });
}

function Map({
  block,
  location,
  offers,
  specialOfferId,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, location });

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === specialOfferId
              ? createIcon(activeIconConfig)
              : createIcon(defaultIconConfig)
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      }}
    />
  );
}

export default Map;
