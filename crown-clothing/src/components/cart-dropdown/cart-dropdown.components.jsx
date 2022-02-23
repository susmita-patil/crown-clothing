import React from "react";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.components";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div>Cart items</div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);
export default CartDropDown;
