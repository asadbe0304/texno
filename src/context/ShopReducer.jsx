const Storage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart.length > 0 ? cart : []));
};
const StorageLike = (like) => {
  localStorage.setItem("like", JSON.stringify(like.length > 0 ? like : []));
};

export const sumCart = (cart) => {
  Storage(cart);
  let cartCount = cart.reduce(
    (totals, product) => totals + product.quantity,
    0
  );
  let totals = cart
    .reduce((totals, product) => totals + product.price * product.quantity, 0)
    .toFixed(2);
  return { cartCount, totals };
};
export const sumLike = (like) => {
  StorageLike(like);
  let LikeCount = like.reduce(
    (totalLike, product) => totalLike + product.quantity,
    0
  );
  let totalLike = like
    .reduce(
      (totalLike, product) => totalLike + product.price * product.quantity,
      0
    )
    .toFixed(2);
  return { LikeCount, totalLike };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD__TO__PRODUCT":
      if (!state.cart.find((e) => e.id === action.payload.id)) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumCart(state.cart),
        cart: [...state.cart],
      };
    case "ADD__TO__LIKE":
      if (!state.like.find((e) => e.id === action.payload.id)) {
        state.like.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumLike(state.like),
        like: [...state.like],
      };
    case "REMOVE__TO__LIKE":
      return {
        ...state,
        ...sumLike(state.like.filter((e) => e.id !== action.payload.id)),
        like: [...state.like.filter((e) => e.id !== action.payload.id)],
      };
    case "REMOVE__TO__PRODUCT":
      return {
        ...state,
        ...sumCart(state.cart.filter((e) => e.id !== action.payload.id)),
        cart: [...state.cart.filter((e) => e.id !== action.payload.id)],
      };
    case "INCREASE":
      state.cart[state.cart.findIndex((e) => e.id === action.payload.id)]
        .quantity++;

      return {
        ...state,
        ...sumCart(state.cart),
        cart: [...state.cart],
      };

    case "DECREASE":
      state.cart[state.cart.findIndex((e) => e.id === action.payload.id)]
        .quantity--;
      return {
        ...state,
        ...sumCart(state.cart),
        cart: [...state.cart],
      };

    default:
      return state;
  }
};
