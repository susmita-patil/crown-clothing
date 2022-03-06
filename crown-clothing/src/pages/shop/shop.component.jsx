import React, { Component } from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.components";
import WithSpinner from "../../components/with-spinner/with-spinner.components";

import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import { Route, Routes } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  state = {
    loading: true,
  };
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {/* <h1>Collections</h1> */}
        <Routes>
          <Route
            path="/"
            element={
              <CollectionOverviewWithSpinner
                isLoading={loading}
                {...this.props}
              />
            }
          />
          <Route
            path=":collectionId"
            element={
              <CollectionPageWithSpinner isLoading={loading} {...this.props} />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
