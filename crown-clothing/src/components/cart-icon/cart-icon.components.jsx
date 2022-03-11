import React from "react";

import { selctCartItemsCount } from "../../redux/cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const itemCount = useSelector(selctCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());
  return (
    <div className="cart-icon" onClick={toggleCartHiddenClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selctCartItemsCount,
// });

//export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
export default CartIcon;
