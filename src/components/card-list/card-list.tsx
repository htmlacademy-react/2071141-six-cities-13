import { Offers } from '../../types/offers';
import Card from '../card/card';

type CardListProps = {
  offers: Offers[];
  onCardHover?: (offer: Offers) => void;
};

function CardList({ offers, onCardHover }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onCardHover={onCardHover} />
      ))}
    </div>
  );
}

export default CardList;
