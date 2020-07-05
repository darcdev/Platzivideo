import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = function Login(props) {
  const [form, setValuesForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValuesForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia Sesion</h2>
        <form className="login__container--form">
          <input
            name="email"
            type="text"
            className="input"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button type="button" onClick={handleSubmit} className="button">
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
          <Link to="/register">Registrate</Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
