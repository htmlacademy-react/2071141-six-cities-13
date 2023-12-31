import { Comment } from '../../types/comment';
import { getFormatDate, getRatingWidth } from '../../utils/utils';

type CommentProps = {
  userComment: Comment;
};

function CommentCard({ userComment }: CommentProps) {
  const { comment, date, rating, user } = userComment;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={'2019-04-24'}>
          {getFormatDate(date)}
        </time>
      </div>
    </li>
  );
}

export default CommentCard;
