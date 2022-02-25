import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelctCartItemsCount = createSelector(
  [SelectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
