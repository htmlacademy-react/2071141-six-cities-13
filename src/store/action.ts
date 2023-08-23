import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, NameSpace } from '../const';
import { Offers } from '../types/offers';
import { Offer } from '../types/offer';
import { Comment, CommentAdd } from '../types/comment';

export const changeCity = createAction<{ city: string }>(
  `${NameSpace.City}/changeCity`
);

export const loadOffers = createAction<{ offers: Offers[] }>(
  `${NameSpace.Offers}/loadOffers`
);
export const loadOffer = createAction<Offer>(`${NameSpace.Offer}/loadOffer`);

export const loadFavorites = createAction<Offers[]>(
  `${NameSpace.Favorites}/loadFavorites`
);

export const loadNearPlaces = createAction<Offers[]>(
  `${NameSpace.NearPlaces}/loadNearPlaces`
);

export const loadComments = createAction<Comment[]>(
  `${NameSpace.Comments}/loadComments`
);

export const addComment = createAction<CommentAdd>(
  `${NameSpace.Comments}/addComment`
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  `${NameSpace.User}/requireAuthorization`
);

export const setError = createAction<string | null>(
  `${NameSpace.User}/setError`
);

export const setOffersDataLoadingStatus = createAction<boolean>(
  `${NameSpace.Data}/setOffersDataLoadingStatus`
);

export const setNearPlacesDataLoadingStatus = createAction<boolean>(
  `${NameSpace.Data}/setNearPlacesDataLoadingStatus`
);
export const setFavoritesDataLoadingStatus = createAction<boolean>(
  `${NameSpace.Data}/setFavoritesLoadingStatus`
);

export const redirectToRoute = createAction<AppRoute>(
  `${NameSpace.Data}/redirectToRoute`
);
