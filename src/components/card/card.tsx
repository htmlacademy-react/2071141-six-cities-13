import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offers } from '../../types/offers';

type CardProps = {
  offer: Offers;
};

function Card({ offer }: CardProps): JSX.Element {
  const { title, type, price, previewImage, isPremium, rating, id } = offer;

  return (
    <article
      className="cities__card place-card"
      id={id}
      // onMouseEnter={onCardHover}
      // onMouseLeave={onCardLeave}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>{' '}
        </div>
      ) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={type}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
