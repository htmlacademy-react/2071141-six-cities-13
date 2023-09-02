import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus, NameSpace } from '../const';
import {
  addComment,
  loadComments,
  loadFavorites,
  loadNearPlaces,
  loadOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setFavoritesDataLoadingStatus,
  setNearPlacesDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Offer } from '../types/offer';
import { Comment, CommentAdd } from '../types/comment';

type Extra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<Offers[], undefined, Extra>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<Offer, Offer['id'], Extra>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, string, Extra>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.Favorite);
    dispatch(setFavoritesDataLoadingStatus(true));
    dispatch(loadFavorites(data));
    dispatch(setFavoritesDataLoadingStatus(false));
  }
);

export const fetchNearPlacesAction = createAsyncThunk<void, string, Extra>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(
      `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`
    );
    dispatch(setNearPlacesDataLoadingStatus(true));
    dispatch(loadNearPlaces(data));
    dispatch(setNearPlacesDataLoadingStatus(true));
  }
);

export const fetchCommentAction = createAsyncThunk<
  Comment[],
  Offer['id'],
  Extra
>(`${NameSpace.Comments}/fetchComments`, async (offerId, { extra: api }) => {
  const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
  return data;
});

export const addCommentAction = createAsyncThunk<
  Comment[],
  { commentData: CommentAdd; offerId: Offer['id'] },
  Extra
>(
  `${NameSpace.Comments}/addComment`,
  async ({ commentData, offerId }, { extra: api }) => {
    const { data } = await api.post<CommentAdd>(
      `${APIRoute.Comments}/${offerId}`,
      commentData
    );
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, Extra>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, Extra>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, Extra>(
  `${NameSpace.User}/logout`,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
