import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchNearPlacesAction } from '../api-actions';
import { NearPlacesData } from '../../types/state';

const initialState: NearPlacesData = {
  nearPlaces: [],
  fetchingStatus: RequestStatus.Idle,
};

export const nearPlacesData = createSlice({
  name: NameSpace.NearPlaces,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlacesAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.nearPlaces = action.payload;
      })
      .addCase(fetchNearPlacesAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Error;
      });
  },
});
