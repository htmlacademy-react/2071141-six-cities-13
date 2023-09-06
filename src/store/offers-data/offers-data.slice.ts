import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { OffersData } from '../../types/state';
import { City } from '../../types/offers';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  offers: [],
  fetchingStatus: RequestStatus.Idle,
  activeCity: 'Paris',
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity(state, action: PayloadAction<City['name']>) {
      state.activeCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Error;
      });
  },
});

export const { setActiveCity } = offersData.actions;
