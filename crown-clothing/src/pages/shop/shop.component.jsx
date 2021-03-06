import React, { useEffect } from "react";

import { CollectionPageContainer } from "../collection/collection.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { CollectionsOverviewContainer } from "../../components/collections-overview/collections-overview.container";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

//const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverviewContainer />} />
        <Route path=":collectionId" element={<CollectionPageContainer />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
