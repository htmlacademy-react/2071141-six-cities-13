import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
import { changeCity, loadOffers } from './action';

type InitialState = {
  currentCity: string | undefined;
  offers: Offers[];
};

const initialState: InitialState = {
  currentCity: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    });
});

export { reducer };
