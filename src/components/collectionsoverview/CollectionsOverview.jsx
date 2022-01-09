import React from "react";
import CollectionPreview from "../../components/collectionpreview/CollectionPreview";
import { selectCollectionsForPreview } from "redux/shop/shopSelector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
