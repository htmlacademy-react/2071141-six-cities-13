import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction(
  'main/changeCity',
  (city: string | undefined) => ({ payload: city })
);

export const loadOffers = createAction('main/loadOffers');
