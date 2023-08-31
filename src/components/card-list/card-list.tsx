import { Offers } from '../../types/offers';
import { sorting } from '../../utils/sorting';
import Card from '../card/card';

type CardListProps = {
  activeSorting: string;
  offers: Offers[];
  onCardHover?: (offer: Offers | undefined) => void;
};

function CardList({
  activeSorting,
  offers,
  onCardHover,
}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {sorting[activeSorting](offers).map((offer) => (
        <Card key={offer.id} offer={offer} onCardHover={onCardHover} />
      ))}
    </div>
  );
}

export default CardList;
