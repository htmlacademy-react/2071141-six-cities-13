import { Offers } from './offers';

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type OfferInfo = {
  description: string;
  bedrooms: number;
  host: Host;
  images: string[];
  maxAdults: number;
};

export type Offer = Offers & OfferInfo;
