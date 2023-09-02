import { NameSpace } from '../../const';
import { OffersData, State } from '../../types/state';

export const getOffers = (state: State): OffersData['offers'] =>
  state[NameSpace.Offers].offers;

export const getOffersFetchingStatus = (
  state: Pick<State, NameSpace.Offers>
): OffersData['fetchingStatus'] => state[NameSpace.Offers].fetchingStatus;
