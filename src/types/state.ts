import { AuthorizationStatus, CityMap, RequestStatus } from '../const';
import { store } from '../store/index';
import { Comment, CommentAdd } from './comment';
import { Offer } from './offer';
import { City, Offers } from './offers';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type UserData = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersData = {
  offers: Offers[];
  fetchingStatus: RequestStatus;
  activeCity: CityMap | City;
};

export type OfferData = {
  offer: Offer | null;
  fetchingStatus: RequestStatus;
};

export type CommentsData = {
  comment: Comment[];
  commentFetchingStatus: RequestStatus;
  commentAddFetchingStatus: RequestStatus;
};
