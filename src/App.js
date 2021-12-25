import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "pages/homepage/HomePage";
import ShopPage from "pages/shoppage/ShopPage";
import CheckoutPage from "pages/checkoutpage/CheckoutPage";
import SignInUpPage from "pages/signinuppage/SignInUpPage";
import Header from "components/header/Header.jsx";
import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from "redux/user/userActions";
import { selectCurrentUser } from "redux/user/userSelector";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route exact path="/checkout/*" element={<CheckoutPage />} />
          {this.props.currentUser ? (
            <Route path="/signin/" element={<SignInUpPage />} />
          ) : null}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
