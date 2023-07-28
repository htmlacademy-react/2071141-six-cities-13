import { useState } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offers[];
};

function CardList({ offers }: CardListProps): JSX.Element {
  const [, setActiveCard] = useState('');
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onCardHover={() => setActiveCard(offer.id)}
          onCardLeave={() => setActiveCard('')}
        />
      ))}
    </div>
  );
}

export default CardList;
