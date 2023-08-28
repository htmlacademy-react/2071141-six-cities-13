import { useState } from 'react';
import CardList from '../../components/card-list/card-list';
import CitiesList from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import UserInfo from '../../components/user-info/user-info';
import { useAppSelector } from '../../hooks/index';
import { Offers } from '../../types/offers';
import NotFoundPage from '../not-found-page/not-found-page';

type MainPageProps = {
  offers: Offers[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const city = useAppSelector((store) => store.city);
  const currentOffers: Offers[] = offers.filter(
    (offer) => offer.city.name === city
  );

  const [activeCard, setActiveCard] = useState<Offers | undefined>(undefined);

  const handleCardHover = (card: Offers) => {
    if (card) {
      const currentOffer = offers.find((offer) => offer.id === card.id);
      setActiveCard(currentOffer);
    } else {
      setActiveCard(undefined);
    }
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserInfo />
          </div>
        </div>
      </header>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList offers={offers} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {currentOffers.length} places to stay in {city}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <CardList offers={currentOffers} onCardHover={handleCardHover} />
          </section>
          {currentOffers.length ? (
            <Map
              block="cities"
              offers={currentOffers}
              specialOffer={activeCard}
            />
          ) : (
            <NotFoundPage />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
