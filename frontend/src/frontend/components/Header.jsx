import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import Logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = function Header(props) {
  const { user } = props;
  const hasUser = Object.keys(user).length;
  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={Logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? <li>{user.name}</li> : null}

          {hasUser ? (
            <Link to="#logout" onClick={handleLogout}>
              Cerrar Sesión
            </Link>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
