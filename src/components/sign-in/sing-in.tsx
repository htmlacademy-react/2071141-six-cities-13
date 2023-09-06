import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function SignIn() {
  return (
    <Link className="header__nav" to={AppRoute.Login}>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </a>
      </li>
    </Link>
  );
}

export default SignIn;
