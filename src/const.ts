export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Root = '/',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Uknown = 'UNKNOWN',
}

export const MAX_COMMENT_LENGTH = 300;

export const MIN_COMMENT_LENGTH = 50;

export const TITLE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
