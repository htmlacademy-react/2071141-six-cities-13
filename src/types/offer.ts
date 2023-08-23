import { Offers } from './offers';

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type OfferInfo = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type Offer = Offers & OfferInfo;
