import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { CommentsData } from '../../types/state';
import { addCommentAction, fetchCommentAction } from '../api-actions';

const initialState: CommentsData = {
  comment: [],
  fetchingStatus: RequestStatus.Idle,
  sendingStatus: RequestStatus.Idle,
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchCommentAction.fulfilled, (state, action) => {
        state.fetchingStatus = RequestStatus.Success;
        state.comment = action.payload;
      })
      .addCase(fetchCommentAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Error;
      })
      .addCase(addCommentAction.pending, (state) => {
        state.sendingStatus = RequestStatus.Pending;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.sendingStatus = RequestStatus.Success;
        state.comment = action.payload;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.sendingStatus = RequestStatus.Error;
      });
  },
});
