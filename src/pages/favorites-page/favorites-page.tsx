import FavoriteEmpty from '../../components/favorite-empty/favorite-empty';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserInfo from '../../components/user-info/user-info';
import { useAppSelector } from '../../hooks/index';
import { getFavorites } from '../../store/favorites-data/favorites-data.selectors';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserInfo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length ? (
            <FavoriteList offers={favorites} />
          ) : (
            <FavoriteEmpty />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
