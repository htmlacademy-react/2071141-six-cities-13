import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import {
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH,
  RequestStatus,
} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getCommentFetchingStatus } from '../../store/coments-data/comments-data.selectors';
import { addCommentAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';

const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

type CommentFormProps = {
  id: Offer['id'];
};

function CommentForm({ id }: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const commentsFetchingStatus = useAppSelector(getCommentFetchingStatus);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setRating(evt.target.value);
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const commentData = {
      rating: Number(rating),
      comment: comment,
    };
    dispatch(addCommentAction({ commentData, offerId: id }));
  }

  useEffect(() => {
    if (commentsFetchingStatus === RequestStatus.Success) {
      setComment('');
      setRating('');
    }
  }, [commentsFetchingStatus]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingMap)
          .reverse()
          .map(([score, title]) => (
            <Fragment key={`${score}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={rating === score}
                onChange={handleInputChange}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
        value={comment}
        onChange={handleTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {MIN_COMMENT_LENGTH} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
