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

export { setFavorite, deleteFavorite, loginRequest };
