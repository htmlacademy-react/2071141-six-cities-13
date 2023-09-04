import { AuthorizationStatus, RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks/index/index';
import CommentForm from '../comment-form/comment-form';
import { Offer } from '../../types/offer';
import CommentCard from '../comment-card/comment-card';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {
  getCommentFetchingStatus,
  getComments,
} from '../../store/coments-data/comments-data.selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type CommentListProps = {
  id: Offer['id'];
};

function CommentList({ id }: CommentListProps): JSX.Element {
  const comments = useAppSelector(getComments);
  const commentsFetchingStatus = useAppSelector(getCommentFetchingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (commentsFetchingStatus === RequestStatus.Pending) {
    return <LoadingScreen />;
  }

  if (commentsFetchingStatus === RequestStatus.Rejected) {
    return <NotFoundPage />;
  }

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
      ;
      {authorizationStatus === AuthorizationStatus.Auth && (
        <CommentForm id={id} />
      )}
    </>
  );
}

export default CommentList;
