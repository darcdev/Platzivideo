import axios from 'axios';

const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});
const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});
const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios
      .post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};
export {
  setFavorite,
  deleteFavorite,
  loginRequest,
  logoutRequest,
  registerUser,
  setError,
  getVideoSource,
};
