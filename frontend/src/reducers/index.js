const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      console.log(action.payload);
      return {
        ...state,
        myList: state.myList.filter(
          (items) => items.id !== action.payload.itemId
        ),
      };
    default:
      return state;
  }
};
export default reducer;
