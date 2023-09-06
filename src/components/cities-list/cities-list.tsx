import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/index';
import { CityNames } from '../../const';
import { setActiveCity } from '../../store/offers-data/offers-data.slice';
import { City } from '../../types/offers';

type CitiesListProps = {
  activeCity: City['name'];
};

function CitiesList({ activeCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityClick = (city: City['name']) => {
    dispatch(setActiveCity(city));
  };

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
