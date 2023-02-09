export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD__TO__PRODUCT":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "REMOVE__TO__PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "INCREASE":

      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, quantity: c.quantity + Number(c.price) };
          } else {
            return c;
          }
        }),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, quantity: c.quantity - Number(c.price) };
          } else {
            return c;
          }
        }),
      };
      case  "REMOVE":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        }
    default:
      return state;
  }
};
