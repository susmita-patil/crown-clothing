import "./App.css";
import React, { useEffect } from "react";

import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import CheckoutPage from "./pages/checkout/checkout.components";

import Header from "./components/header/header.components";
import setCurrentUser from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

// import { selectShopCollectionsForPreview } from "./redux/shop/shop.selectors";

import { Route, Routes, Navigate } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect, useDispatch } from "react-redux";

const App = ({ setCurrentUser, currentUser }) => {
  //const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser(userAuth);
      return unsubscribeFromAuth;
    });
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/shop" element={<ShopPage />} /> */}
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
        />

        {/* <Route path="/signin" element={<SignInAndSignUpPage />} /> */}
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectShopCollectionsForPreview,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
