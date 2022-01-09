import React from "react";
import CollectionsOverview from "../../components/collectionsoverview/CollectionsOverview";
import CollectionPage from "pages/collectionpage/CollectionPage";
import { Routes, Route} from "react-router-dom";

const ShopPage = () =>{ 
  return(
  <div className="shop-page">
  <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
  </div>
)};

export default ShopPage;
