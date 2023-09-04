import { useState } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { Offers } from '../../types/offers';
import { changeFavoritesAction } from '../../store/api-actions';

type BookmarkProps = {
  id: Offers['id'];
  isActive: Offers['isFavorite'];
};

function BookmarkButton({ id, isActive }: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(isActive);

  const handleFavoriteClick = () => {
    const changedFavoriteStatus = Number(!isFavorite);
    setIsFavorite(!isFavorite);
    dispatch(changeFavoritesAction({ id, status: changedFavoriteStatus }));
  };

  return (
    <button
      className="place-card__bookmark-button button"
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
