import { NameSpace } from '../../const';
import { FavoritesData, State } from '../../types/state';

export const getFavorites = (state: State): FavoritesData['favorites'] =>
  state[NameSpace.Favorites].favorites;

export const getFavoritesFetchingStatus = (
  state: Pick<State, NameSpace.Favorites>
): FavoritesData['fetchingStatus'] => state[NameSpace.Favorites].fetchingStatus;
