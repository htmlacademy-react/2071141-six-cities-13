import { createReducer } from '@reduxjs/toolkit';
//import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
import { changeCity, loadOffers, requireAuthorization } from './action';
import { AuthorizationStatus } from '../const';

const initialState: {
  city: string | null;
  offers: Offers[];
  authorizationStatus: AuthorizationStatus;
} = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Uknown,
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
    });
});

export { reducer };
