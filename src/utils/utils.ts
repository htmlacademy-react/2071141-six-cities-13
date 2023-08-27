import { OFFER_RATIO } from '../const';
import { Offers } from '../types/offers';

export function getRatingWidth(rating: Offers['rating']): string {
  return `${Math.round(rating) * OFFER_RATIO}%`;
}
