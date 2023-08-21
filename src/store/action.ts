import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AppRoute, AuthorizationStatus, NameSpace } from '../const';

export const changeCity = createAction<{ city: string }>(
  `${NameSpace.City}/changeCity`
);

export const loadOffers = createAction<{ offers: Offers[] }>(
  `${NameSpace.Offers}/loadOffers`
);

export const loadFavorites = createAction<{ favorites: Offers[] }>(
  `${NameSpace.Favorites}/loadFavorites`
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

export const redirectToRoute = createAction<AppRoute>(
  `${NameSpace.Data}/redirectToRoute`
);
