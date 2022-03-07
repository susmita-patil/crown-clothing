import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../with-spinner/with-spinner.components";
import { selectCollectionIsFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collections-overview.components";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// const collectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverview)
// );
