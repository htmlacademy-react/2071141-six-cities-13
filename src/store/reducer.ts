import { createReducer } from '@reduxjs/toolkit';
//import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
import {
  changeCity,
  loadOffers,
  requireAuthorization,
  setError,
} from './action';
import { AuthorizationStatus } from '../const';

type InitialState = {
  city: string | null;
  offers: Offers[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Uknown,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
