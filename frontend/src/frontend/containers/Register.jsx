import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions';

const Register = function Register(props) {
  const [form, setFormValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setFormValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInput}
          />
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
          />
          <button type="submit" className="button">
            Registrarme
          </button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};
const mapDispathToProps = {
  registerUser,
};
export default connect(null, mapDispathToProps)(Register);
