import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { OfferData } from '../../types/state';
import { fetchOfferAction } from '../api-actions';

const initialState: OfferData = {
  offer: null,
  fetchingStatus: RequestStatus.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Error;
      });
  },
});
