import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = function Login() {
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia Sesion</h2>
        <form className="login__container--form">
          <input type="text" className="input" placeholder="Correo" />
          <input type="password" className="input" placeholder="Contraseña" />
          <button type="button" className="button">
            Iniciar Sesion
          </button>
          <div className="login__container--remember-me">
            <label htmlFor="cbox1">
              <input type="checkbox" name="" id="cbox1" value="checkbox" />
              Recuerdame
            </label>

            <a href="http">Olvide mi Contraseña </a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="google" />
            Inicia Sesion con Google
          </div>
          <div>
            <img src={twitterIcon} alt="google " />
            Inicia Sesion con Twitter
          </div>
        </section>
        <p className="login__container--register ">
          No tienes ninguna cuenta
          <a href="http">Registrate</a>
        </p>
      </section>
    </section>
  );
};

export default Login;
