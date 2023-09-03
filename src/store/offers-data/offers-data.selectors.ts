import { NameSpace } from '../../const';
import { OffersData, State } from '../../types/state';

export const getOffers = (state: State): OffersData['offers'] =>
  state[NameSpace.Offers].offers;

export const getActiveCity = (
  state: Pick<State, NameSpace.Offers>
): OffersData['activeCity'] => state[NameSpace.Offers].activeCity;

export const getOffersFetchingStatus = (
  state: Pick<State, NameSpace.Offers>
): OffersData['fetchingStatus'] => state[NameSpace.Offers].fetchingStatus;
