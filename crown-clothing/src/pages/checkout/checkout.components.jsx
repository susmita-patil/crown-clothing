import React from "react";

import "./checkout.styles.scss";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL= ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following credit card for payments . <br /> 4242 4242
        4242 4242 - Exp:01/23 - CVV:123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal,
// });
// export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutPage;
