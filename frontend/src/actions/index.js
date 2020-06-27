const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export { setFavorite, deleteFavorite };
