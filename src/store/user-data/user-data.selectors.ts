import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/state';

export const getUser = (state: Pick<State, NameSpace.User>): UserData['user'] =>
  state[NameSpace.User].user;

export const getAuthorizationStatus = (
  state: Pick<State, NameSpace.User>
): UserData['authorizationStatus'] => state[NameSpace.User].authorizationStatus;

export const getLoginStatus = (
  state: Pick<State, NameSpace.User>
): UserData['loginStatus'] => state[NameSpace.User].loginStatus;
