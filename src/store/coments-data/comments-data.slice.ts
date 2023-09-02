import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { CommentsData } from '../../types/state';
import { addCommentAction, fetchCommentAction } from '../api-actions';

const initialState: CommentsData = {
  comment: [],
  commentFetchingStatus: RequestStatus.Idle,
  commentAddFetchingStatus: RequestStatus.Idle,
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentAction.pending, (state) => {
        state.commentFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchCommentAction.fulfilled, (state, action) => {
        state.commentFetchingStatus = RequestStatus.Success;
        state.comment = action.payload;
      })
      .addCase(fetchCommentAction.rejected, (state) => {
        state.commentFetchingStatus = RequestStatus.Error;
      })
      .addCase(addCommentAction.pending, (state) => {
        state.commentFetchingStatus = RequestStatus.Pending;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.commentFetchingStatus = RequestStatus.Success;
        state.comment = action.payload;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.commentFetchingStatus = RequestStatus.Error;
      });
  },
});
