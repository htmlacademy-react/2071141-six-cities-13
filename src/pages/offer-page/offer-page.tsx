import { useEffect } from 'react';
import Logo from '../../components/logo/logo';
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
import { Helmet } from 'react-helmet-async';
import OfferInfo from '../../components/offer-info/offer-info';
import { getOffers } from '../../store/offers-data/offers-data.selectors';
import { getNearPlaces } from '../../store/near-places-data/near-places-data.selectors';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOffers);
  const nearPlaces = useAppSelector(getNearPlaces).slice(0, 3);
  //const favorites = useAppSelector((state) => state.favorites);

  const offerFetchStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearPlacesAction(id));
    }
  }, [id, dispatch]);

  return (
    <>
      {offerFetchStatus === RequestStatus.Error && <NotFoundPage />}
      {offerFetchStatus === RequestStatus.Pending && <LoadingScreen />}
      {offerFetchStatus === RequestStatus.Success && offer && (
        <main className="page__main page__main--offer">
          <Helmet>
            <title>{`6 cities - ${offer.title}`}</title>
          </Helmet>
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <Logo />
                <UserInfo />
              </div>
            </div>
          </header>
          <section className="offer">
            <OfferInfo offer={offer} />
            <Map
              block="offer"
              offers={nearPlaces.concat(offer)}
              specialOffer={offer}
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
      )}
    </>
  );
}

export default OfferPage;
