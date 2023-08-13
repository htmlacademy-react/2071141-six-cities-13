import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { NameSpace } from '../const';

export const changeCity = createAction<{ city: string }>(
  `${NameSpace.City}/changeCity`
);

export const loadOffers = createAction<{ offers: Offers[] }>(
  `${NameSpace.Offers}loadOffers`
);
