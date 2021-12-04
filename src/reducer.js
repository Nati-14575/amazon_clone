export const initialState = {
  basket: [],
  currentUser: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Product with ${action.id} not found in basket`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_LOGGED_USER":
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};
