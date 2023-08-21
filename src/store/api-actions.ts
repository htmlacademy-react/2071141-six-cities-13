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

export const fetchOffersAction = createAsyncThunk<void, undefined, Extra>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offers[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers({ offers: data }));
  }
);

export const fetchOfferAction = createAsyncThunk<void, string, Extra>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);

    dispatch(loadOffer(data));
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, string, Extra>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.Favorite);

    dispatch(loadFavorites(data));
  }
);

export const fetchNearPlacesAction = createAsyncThunk<void, string, Extra>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(
      `${APIRoute.Offers}/${offerId}/${APIRoute.Nearby}`
    );
    dispatch(loadNearPlaces(data));
  }
);

export const fetchCommentAction = createAsyncThunk<void, string, Extra>(
  `${NameSpace.Comments}/fetchComments`,
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(
      `${APIRoute.Comments}/${offerId}`
    );
    dispatch(loadComments(data));
  }
);

export const AddCommenAction = createAsyncThunk<
  void,
  { commentData: CommentAdd; offerId: Offers['id'] },
  Extra
>(
  `${NameSpace.Comments}/addComment`,
  async ({ commentData, offerId }, { dispatch, extra: api }) => {
    const { data } = await api.post<CommentAdd>(
      `${APIRoute.Comments}/${offerId}`,
      commentData
    );
    dispatch(addComment(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, Extra>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, Extra>(
  'user/login',
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
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
