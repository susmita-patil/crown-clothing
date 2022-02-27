import React, { Component } from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.components";

import { Route, Routes } from "react-router-dom";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {/* <h1>Collections</h1> */}
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
