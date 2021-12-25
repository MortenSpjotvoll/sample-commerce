import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../custombutton/CustomButton";
import CartItem from "../cartitem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "redux/cart/cartActions";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        {}
      </div>
      <CustomButton onClick={() => {
        dispatch(toggleCartHidden());
        navigate("/checkout")}
        }>
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
