import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store/index';
import { Comment } from './comment';
import { Offer } from './offer';
import { City, Offers } from './offers';
import { User } from './user';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type UserData = {
  user: User | null;
  loginStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
};

export type OffersData = {
  offers: Offers[];
  fetchingStatus: RequestStatus;
  activeCity: City['name'];
};

export type OfferData = {
  offer: Offer | null;
  fetchingStatus: RequestStatus;
};

export type NearPlacesData = {
  nearPlaces: Offers[];
  fetchingStatus: RequestStatus;
};

export type FavoritesData = {
  favorites: Offers[];
  fetchingStatus: RequestStatus;
};

export type CommentsData = {
  comment: Comment[];
  fetchingStatus: RequestStatus;
  sendingStatus: RequestStatus;
};
