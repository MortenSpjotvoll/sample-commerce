import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import SignInUpPage from './pages/signinuppage/SignInUpPage';
import Header from './components/header/Header.jsx';
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/" element={<ShopPage />} />
        <Route path="/signin/" element={<SignInUpPage />} />
      </Routes>
    </div>
  );
}
