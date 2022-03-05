import React, { Component } from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.components";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import { Route, Routes } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    return (
      <div className="shop-page">
        {/* <h1>Collections</h1> */}
        <Routes>
          <Route path="/" element={<CollectionOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
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
