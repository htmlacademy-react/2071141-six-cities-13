import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import {
  addComment,
  changeCity,
  loadComments,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
} from './action';
import { AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { Comment, CommentAdd } from '../types/comment';

type InitialState = {
  city: string | null;
  offers: Offers[];
  offer: Offer | null;
  favorite: Offers[];
  nearPlaces: Offers[];
  comments: Comment[];
  commentAdd: CommentAdd | null;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  offer: null,
  favorite: [],
  nearPlaces: [],
  comments: [],
  commentAdd: null,
  authorizationStatus: AuthorizationStatus.Uknown,
  isOffersLoading: false,
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
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
