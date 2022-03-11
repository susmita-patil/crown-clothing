import React from "react";

import "./collections-overview.styles.scss";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopCollectionsForPreview,
// });

// export default connect(mapStateToProps)(CollectionOverview);
export default CollectionOverview;
