import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import {
  addComment,
  changeCity,
  loadComments,
  loadFavorites,
  loadNearPlaces,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setError,
  setFavoritesDataLoadingStatus,
  setNearPlacesDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';
import { AuthorizationStatus, RequestStatus } from '../const';
import { Offer } from '../types/offer';
import { Comment, CommentAdd } from '../types/comment';
import { fetchOfferAction } from './api-actions';

type InitialState = {
  city: string | null;
  offers: Offers[];
  offer: Offer | null;
  favorites: Offers[];
  nearPlaces: Offers[];
  comments: Comment[];
  commentAdd: CommentAdd | null;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  offerFetchStatus: RequestStatus;
  isNearPlacesLoading: boolean;
  isFavoritesLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  offer: null,
  favorites: [],
  nearPlaces: [],
  comments: [],
  commentAdd: null,
  authorizationStatus: AuthorizationStatus.Uknown,
  isOffersLoading: false,
  offerFetchStatus: RequestStatus.Idle,
  isNearPlacesLoading: false,
  isFavoritesLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(fetchOfferAction.rejected, (state) => {
      state.offerFetchStatus = RequestStatus.Error;
    })
    .addCase(fetchOfferAction.pending, (state) => {
      state.offerFetchStatus = RequestStatus.Pending;
    })
    .addCase(fetchOfferAction.fulfilled, (state) => {
      state.offerFetchStatus = RequestStatus.Success;
    })
    .addCase(setNearPlacesDataLoadingStatus, (state, action) => {
      state.isNearPlacesLoading = action.payload;
    })
    .addCase(setFavoritesDataLoadingStatus, (state, action) => {
      state.isFavoritesLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.commentAdd = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
