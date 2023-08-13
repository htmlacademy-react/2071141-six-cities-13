import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const changeCity = createAction<{ city: string }>('changeCity');

export const loadOffers = createAction<{ offers: Offers[] }>('loadOffers');
