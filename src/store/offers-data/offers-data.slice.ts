import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityMap, NameSpace, RequestStatus } from '../../const';
import { OffersData } from '../../types/state';
import { City } from '../../types/offers';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  offers: [],
  fetchingStatus: RequestStatus.Idle,
  activeCity: CityMap.Paris,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity(state, action: PayloadAction<City>) {
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
