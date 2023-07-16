import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="tabs"></div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404 </b>
                <p className="cities__status">Not Found </p>
                <p className="cities__status-description">
                  <Link to={AppRoute.Root}>
                    The resourse requested could not be found on this server! Go
                    to the homepage
                  </Link>
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
