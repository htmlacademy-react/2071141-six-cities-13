import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index/index';
import CommentForm from '../comment-form/comment-form';
import { fetchCommentAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import CommentCard from '../comment-card/comment-card';

type CommentFormProps = {
  id: Offer['id'];
};

function CommentList({ id }: CommentFormProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentAction(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <section className="offer__reviews reviews">
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{comments.length}</span>
        </h2>

        {comments.map((comment) => (
          <CommentCard key={comment.id} userComment={comment} />
        ))}
      </section>
      ;{authorizationStatus === AuthorizationStatus.Auth && <CommentForm />}
    </>
  );
}

export default CommentList;
