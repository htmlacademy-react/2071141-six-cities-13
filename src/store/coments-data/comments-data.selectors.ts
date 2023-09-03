import { NameSpace } from '../../const';
import { CommentsData, State } from '../../types/state';

export const getComments = (state: State): CommentsData['comment'] =>
  state[NameSpace.Comments].comment;

export const getCommentFetchingStatus = (
  state: Pick<State, NameSpace.Comments>
): CommentsData['fetchingStatus'] => state[NameSpace.Comments].fetchingStatus;

export const getCommentAddFetchingStatus = (
  state: Pick<State, NameSpace.Comments>
): CommentsData['sendingStatus'] => state[NameSpace.Comments].sendingStatus;
