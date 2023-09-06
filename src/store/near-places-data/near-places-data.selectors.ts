import { NameSpace } from '../../const';
import { NearPlacesData, State } from '../../types/state';

export const getNearPlaces = (state: State): NearPlacesData['nearPlaces'] =>
  state[NameSpace.NearPlaces].nearPlaces;

export const getNearPlacesFetchingStatus = (
  state: Pick<State, NameSpace.NearPlaces>
): NearPlacesData['fetchingStatus'] =>
  state[NameSpace.NearPlaces].fetchingStatus;
