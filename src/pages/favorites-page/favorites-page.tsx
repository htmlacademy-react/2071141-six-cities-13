import FavoriteEmpty from '../../components/favorite-empty/favorite-empty';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserInfo from '../../components/user-info/user-info';
import { Offers } from '../../types/offer';

type FavoritesPageProps = {
  offers: Offers[];
};

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favorites = offers.filter((offer) => offer.isFavorite);
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
