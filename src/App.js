import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/" element={<ShopPage />} />
      </Routes>
    </div>
  );
}
