import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { OffersData, State } from '../../types/state';

export const getOffers = (state: State): Offers[] =>
  state[NameSpace.Offers].offers;

export const getOffersFetchingStatus = (
  state: Pick<State, NameSpace.Offers>
): OffersData['fetchingStatus'] => state[NameSpace.Offer].fetchingStatus;
