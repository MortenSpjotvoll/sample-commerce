import { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import SignInUpPage from "./pages/signinuppage/SignInUpPage";
import Header from "./components/header/Header.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({currentUser: user})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/" element={<ShopPage />} />
          <Route path="/signin/" element={<SignInUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
