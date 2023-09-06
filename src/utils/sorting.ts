import { Offers } from '../types/offers';
import { SortingType } from '../types/sorting';

function sortByRating(a: Offers, b: Offers) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: Offers, b: Offers) {
  return a.price - b.price;
}

function sortHighToLow(a: Offers, b: Offers) {
  return b.price - a.price;
}

export const sorting: Record<SortingType, (offers: Offers[]) => Offers[]> = {
  Popular: (offers: Offers[]) => offers.slice(),
  HighToLow: (offers: Offers[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: Offers[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: Offers[]) => offers.slice().sort(sortByRating),
};
