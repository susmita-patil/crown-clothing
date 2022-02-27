import React from "react";

import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
