import { useEffect } from 'react';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import UserInfo from '../../components/user-info/user-info';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useParams } from 'react-router-dom';
import {
  fetchNearPlacesAction,
  fetchOfferAction,
} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { RequestStatus } from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';
import Card from '../../components/card/card';
import Map from '../../components/map/map';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.offer);
  const nearPlaces = useAppSelector((state) => state.nearPlaces).slice(0, 3);
  // const favorites = useAppSelector((state) => state.favorites);

  const offerFetchStatus = useAppSelector((state) => state.offerFetchStatus);
  // const nearPlacesFetchingStatus = useAppSelector(
  //   (state) => state.isNearPlacesLoading
  // );
  // const favoritesFetchingStatus = useAppSelector(
  //   (state) => state.isFavoritesLoading
  // );

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearPlacesAction(id));
    }
  }, [id, dispatch]);

  console.log(offer);
  // console.log(nearPlaces);
  //  console.log(favorites);

  return (
    <>
      {offerFetchStatus === RequestStatus.Error && <NotFoundPage />}
      {offerFetchStatus === RequestStatus.Pending && <LoadingScreen />}
      {offerFetchStatus === RequestStatus.Success && offer && (
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <Logo />
                <UserInfo />
              </div>
            </div>
          </header>
          <main className="page__main page__main--offer">
            <section className="offer">
              <div className="offer__gallery-container container">
                <div className="offer__gallery">
                  <div className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={offer.images[0]}
                      alt={offer.type}
                    />
                  </div>
                  <div className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={offer.images[1]}
                      alt={offer.type}
                    />
                  </div>
                  <div className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={offer.images[2]}
                      alt={offer.type}
                    />
                  </div>
                  <div className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={offer.images[3]}
                      alt={offer.type}
                    />
                  </div>
                  <div className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={offer.images[4]}
                      alt={offer.type}
                    />
                  </div>
                  <div className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={offer.images[5]}
                      alt={offer.type}
                    />
                  </div>
                </div>
              </div>
              <div className="offer__container container">
                <div className="offer__wrapper">
                  {offer.isPremium ? (
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className="offer__name-wrapper">
                    <h1 className="offer__name">{offer.title}</h1>
                    <button
                      className="offer__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="offer__bookmark-icon"
                        width={31}
                        height={33}
                      >
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="offer__rating rating">
                    <div className="offer__stars rating__stars">
                      {/* отображение количества звезд */}
                      <span style={{ width: '40%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="offer__rating-value rating__value">
                      {offer.rating}
                    </span>
                  </div>
                  <ul className="offer__features">
                    <li className="offer__feature offer__feature--entire">
                      {offer.type}
                    </li>
                    <li className="offer__feature offer__feature--bedrooms">
                      {offer.bedrooms} Bedrooms
                    </li>
                    <li className="offer__feature offer__feature--adults">
                      Max {offer.maxAdults} adults
                    </li>
                  </ul>
                  <div className="offer__price">
                    <b className="offer__price-value">€{offer.price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">What&apos;s inside</h2>
                    <ul className="offer__inside-list">
                      {offer.goods.map((good) => (
                        <li className="offer__inside-item" key={good}>
                          {good}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="offer__host">
                    <h2 className="offer__host-title">Meet the host</h2>
                    <div className="offer__host-user user">
                      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                        <img
                          className="offer__avatar user__avatar"
                          src={offer.host.avatarUrl}
                          width={74}
                          height={74}
                          alt="Host avatar"
                        />
                      </div>
                      <span className="offer__user-name">
                        {offer.host.name}
                      </span>

                      <span className="offer__user-status">Pro</span>
                    </div>
                    <div className="offer__description">
                      <p className="offer__text">{offer.description}</p>
                      <p className="offer__text"></p>
                    </div>
                  </div>
                  <ReviewList />

                  <ReviewForm />
                </div>
              </div>
              <Map
                block="offer"
                location={offer.location}
                offers={nearPlaces}
                specialOfferId={offer.id}
              />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                <div className="near-places__list places__list">
                  {nearPlaces.map((nearPlace) => (
                    <Card key={nearPlace.id} offer={nearPlace} />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default OfferPage;
