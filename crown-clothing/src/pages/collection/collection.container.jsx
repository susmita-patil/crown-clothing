import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../../components/with-spinner/with-spinner.components";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.components";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
