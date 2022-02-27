import React from "react";

import "./collection.styles.scss";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.components";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

const CollectionPage = () => {
  let { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
