import React from "react";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.components";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: SelectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
