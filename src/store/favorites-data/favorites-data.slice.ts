import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { FavoritesData } from '../../types/state';
import { changeFavoritesAction, fetchFavoritesAction } from '../api-actions';

const initialState: FavoritesData = {
  favorites: [],
  fetchingStatus: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      })
      .addCase(changeFavoritesAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(
            (offer) => offer.id !== action.payload.id
          );
        }
      });
  },
});
