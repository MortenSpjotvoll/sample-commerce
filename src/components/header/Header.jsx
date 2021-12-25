import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "assets/crown.svg";
import { auth } from "utils/firebase/firebase.utils";
import CartIcon from "../carticon/CartIcon";
import CartDropdown from "../cartdropdown/CartDropdown";
import "./Header.scss";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "redux/cart/cartSelector";
import { selectCurrentUser } from "redux/user/userSelector";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
