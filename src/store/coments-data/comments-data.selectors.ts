import { NameSpace } from '../../const';
import { CommentsData, State } from '../../types/state';

export const getComment = (state: State): Comment =>
  state[NameSpace.Comments].comment;

export const getCommentFetchingStatus = (
  state: Pick<State | NameSpace.Comments>
): CommentsData['commentFetchingStatus'] =>
  state[NameSpace.Comments].commentFetchingStatus;

export const getCommentAddFetchingStatus = (
  state: Pick<State | NameSpace.Comments>
): CommentsData['commentAddFetchingStatus'] =>
  state[NameSpace.Comments].commentAddFetchingStatus;
