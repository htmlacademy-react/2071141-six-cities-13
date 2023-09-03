import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
// import { changeCity, loadOffers } from '../../store/action';
import { Offers } from '../../types/offers';
import { CityNames } from '../../const';
import { getActiveCity } from '../../store/offers-data/offers-data.selectors';

type CitiesListProps = {
  offers: Offers[];
};

function CitiesList({ offers }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityClick = (city: string) => {
    // dispatch(changeCity({ city }));
    // dispatch(loadOffers({ offers }));
  };

  const activeCity = useAppSelector(getActiveCity);

  return (
    <ul className="locations__list tabs__list">
      {CityNames.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={classNames('locations__item-link tabs__item', {
              'tabs__item--active': city === activeCity,
            })}
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleCityClick(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
