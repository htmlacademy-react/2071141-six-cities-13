import { NameSpace } from '../../const';
import { OfferData, State } from '../../types/state';

export const getOffer = (state: State): OfferData['offer'] =>
  state[NameSpace.Offer].offer;

export const getOfferFetchingStatus = (
  state: Pick<State, NameSpace.Offer>
): OfferData['fetchingStatus'] => state[NameSpace.Offer].fetchingStatus;
